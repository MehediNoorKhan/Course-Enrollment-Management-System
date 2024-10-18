"use server";

// CRUD for Events

import db from '@/app/_lib/db.js';

export const getEvents = async () => {
    try {
        const events = await db.Events.findMany();
        return events;
    } catch (error) {
        console.error("getEvents", error);
        return [];
    }
};

export const createEvent = async (data) => {
    try {

        const event = await db.Events.create({
            data: data
        });
        return event;

    } catch (error) {
        console.error("createEvent", error);
        return [];
    }
};

export const updateEvent = async (id, data) => {
    try {

        const event = await db.Events.update({
            where: {
                id: id
            },
            data: {
                imageUrl: data.imageUrl,
                title: data.title,
                description: data.description,
                location: data.location,
                heldAt: data.heldAt,


            }
        });
        return event;

    } catch (error) {
        console.error("updateEvent", error);
        return [];
    }
};

export const deleteEvent = async (id) => {
    try {

        const event = await db.Events.delete({
            where: {
                id: id
            }
        });
        return event;

    } catch (error) {
        console.error("deleteEvent", error);
        return [];
    }
};