import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Get specific contact by ID
  app.get("/api/contacts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid contact ID" 
        });
      }

      const contact = await storage.getContact(id);
      if (!contact) {
        return res.status(404).json({ 
          success: false, 
          message: "Contact not found" 
        });
      }

      res.json(contact);
    } catch (error) {
      console.error("Failed to fetch contact:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
