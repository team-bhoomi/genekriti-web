/**
 * USE CASE
 * 1. To list all events in /events page
 * 2. To fetch all events from database
 */
import { serviceMessages } from "@/lib/constants/serviceMessage";
import { prisma } from "@/lib/prisma";
import { Event } from "@prisma/client";

export const getAllEvents = async (): Promise<{
  data: Event[] | null;
  success: boolean;
  error: unknown;
  message: string;
}> => {
  try {
    const response = await prisma.event.findMany();
    return {
      data: response,
      error: null,
      success: true,
      message: serviceMessages.EVENT_FOUND_ALL,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error,
      success: false,
      message: serviceMessages.EVENT_NOT_FOUND,
    };
  }
};
