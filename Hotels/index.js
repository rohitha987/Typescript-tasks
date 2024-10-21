var Hotel = /** @class */ (function () {
    function Hotel(rooms) {
        this.rooms = rooms;
    }
    Hotel.prototype.displayRooms = function () {
        console.log("Available Rooms:");
        this.rooms.forEach(function (room) {
            if (room.isAvailable) {
                console.log("Room ".concat(room.id, " - ").concat(room.type, " - $").concat(room.pricePerNight, "/night"));
            }
        });
    };
    Hotel.prototype.checkAvailability = function (roomId) {
        var room = this.rooms.find(function (room) { return room.id === roomId; });
        return room ? room.isAvailable : false;
    };
    Hotel.prototype.bookRoom = function (roomId) {
        var room = this.rooms.find(function (room) { return room.id === roomId; });
        if (room) {
            if (room.isAvailable) {
                room.isAvailable = false;
                return "Room ".concat(room.id, " has been booked successfully.");
            }
            else {
                return "Room ".concat(room.id, " is not available.");
            }
        }
        else {
            return "Room ".concat(roomId, " does not exist.");
        }
    };
    Hotel.prototype.cancelBooking = function (roomId) {
        var room = this.rooms.find(function (room) { return room.id === roomId; });
        if (room) {
            if (!room.isAvailable) {
                room.isAvailable = true;
                return "Booking for room ".concat(room.id, " has been canceled successfully.");
            }
            else {
                return "Room ".concat(room.id, " is not booked.");
            }
        }
        else {
            return "Room ".concat(roomId, " does not exist.");
        }
    };
    Hotel.prototype.showAllBookedRooms = function () {
        console.log("Booked Rooms:");
        this.rooms.forEach(function (room) {
            if (!room.isAvailable) {
                console.log("Room ".concat(room.id, " - ").concat(room.type, " - $").concat(room.pricePerNight, "/night"));
            }
        });
    };
    Hotel.prototype.showAllAvailableRooms = function () {
        console.log("All Available Rooms:");
        this.rooms.forEach(function (room) {
            if (room.isAvailable) {
                console.log("Room ".concat(room.id, " - ").concat(room.type, " - $").concat(room.pricePerNight, "/night"));
            }
        });
    };
    return Hotel;
}());
// Example usage
var hotel = new Hotel([
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
