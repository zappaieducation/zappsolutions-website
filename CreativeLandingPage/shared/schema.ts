import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  companyName: text("company_name").notNull(),
  companyWebsite: text("company_website"),
  companySize: text("company_size").notNull(),
  annualRevenue: text("annual_revenue").notNull(),
  projectBudget: text("project_budget").notNull(),
  interestedServices: text("interested_services").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companySize: z.string().min(1, "Please select a company size"),
  annualRevenue: z.string().min(1, "Please select annual revenue range"),
  projectBudget: z.string().min(1, "Please select project budget range"),
  interestedServices: z.string().min(1, "Please select interested services"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Keep the existing users table for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
