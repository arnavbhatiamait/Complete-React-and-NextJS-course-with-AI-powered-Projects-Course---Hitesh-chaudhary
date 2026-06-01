import {pgTable,serial ,varchar, timestamp,boolean} from "drizzle-orm/pg-core";

export const users = pgTable("users",{
    id: serial("id").primaryKey(),
    email:varchar("email",{length:255}).notNull().unique(),
    name:varchar("name",{length:255}).notNull(),
    password:varchar("password",{length:255}).notNull(),
    createdAt:timestamp("created_at").notNull().defaultNow(),
    updatedAt:timestamp("updated_at").notNull().defaultNow(),
    isActive:boolean("isActive").notNull().default(true)
})