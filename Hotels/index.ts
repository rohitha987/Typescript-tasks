interface Room {
    id: string;
    type: string;
    pricePerNight: number;
    isAvailable: boolean;
}

class Hotel {
    private rooms: Room[];

    constructor(rooms: Room[]) {
        this.rooms = rooms;
    }

    displayRooms(): void {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            if (room.isAvailable) {
                console.log(`Room ${room.id} - ${room.type} - $${room.pricePerNight}/night`);
            }
        });
    }

    checkAvailability(roomId: string): boolean {
        const room = this.rooms.find(room => room.id === roomId);
        return room ? room.isAvailable : false;
    }

    bookRoom(roomId: string): string {
        const room = this.rooms.find(room => room.id === roomId);
        if (room) {
            if (room.isAvailable) {
                room.isAvailable = false;
                return `Room ${room.id} has been booked successfully.`;
            } else {
                return `Room ${room.id} is not available.`;
            }
        } else {
            return `Room ${roomId} does not exist.`;
        }
    }

    cancelBooking(roomId: string): string {
        const room = this.rooms.find(room => room.id === roomId);
        if (room) {
            if (!room.isAvailable) {
                room.isAvailable = true;
                return `Booking for room ${room.id} has been canceled successfully.`;
            } else {
                return `Room ${room.id} is not booked.`;
            }
        } else {
            return `Room ${roomId} does not exist.`;
        }
    }

    showAllBookedRooms(): void {
        console.log("Booked Rooms:");
        this.rooms.forEach(room => {
            if (!room.isAvailable) {
                console.log(`Room ${room.id} - ${room.type} - $${room.pricePerNight}/night`);
            }
        });
    }

    showAllAvailableRooms(): void {
        console.log("All Available Rooms:");
        this.rooms.forEach(room => {
            if (room.isAvailable) {
                console.log(`Room ${room.id} - ${room.type} - $${room.pricePerNight}/night`);
            }
        });
    }
}

// Example usage
const hotel = new Hotel([
    { id: "101", type: "Single", pricePerNight: 100, isAvailable: true },
    { id: "102", type: "Double", pricePerNight: 150, isAvailable: true },
    { id: "103", type: "Suite", pricePerNight: 250, isAvailable: true },
]);

hotel.displayRooms(); // Display available rooms
console.log(hotel.bookRoom("101")); // Book room 101
hotel.showAllBookedRooms(); // Show all booked rooms
hotel.showAllAvailableRooms(); // Show all available rooms
console.log(hotel.cancelBooking("101"));
hotel.showAllAvailableRooms(); // Cancel booking for room 101