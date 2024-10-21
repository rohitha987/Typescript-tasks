interface Seat {
    seatNumber: number;
    isBooked: boolean;
}

class Theatre {
    seats: Seat[] = [];
    totalSeats: number;

    constructor(totalSeats: number) {
        this.totalSeats = totalSeats;

        for (let i = 1; i <= totalSeats; i++) {
            this.seats.push({ seatNumber: i, isBooked: false });
        }
    }

    bookSeat(seatNumber: number): void {
        const seat = this.seats.find(seat => seat.seatNumber === seatNumber);
        if (seat) {
            if (!seat.isBooked) {
                seat.isBooked = true;
                console.log(`Seat ${seatNumber} has been booked.`);
            } else {
                console.log(`Seat ${seatNumber} is already booked.`);
            }
        } else {
            console.log(`Invalid seat number ${seatNumber}.`);
        }
    }

    public cancelSeat(seatNumber: number): void {
        const seat = this.seats.find(seat => seat.seatNumber === seatNumber);
        if (seat) {
            if (seat.isBooked) {
                seat.isBooked = false;
                console.log(`Booking for seat ${seatNumber} has been canceled.`);
            } else {
                console.log(`Seat ${seatNumber} was not booked.`);
            }
        } else {
            console.log(`Invalid seat number ${seatNumber}.`);
        }
    }

    public viewAvailableSeats(): void {
        const availableSeats = this.seats.filter(seat => !seat.isBooked);
        if (availableSeats.length > 0) {
            console.log('Available seats:', availableSeats.map(seat => seat.seatNumber));
        } else {
            console.log('No available seats.');
        }
    }
}


const theatre = new Theatre(10); 

theatre.viewAvailableSeats(); 
theatre.bookSeat(3);          
theatre.bookSeat(3);  
theatre.viewAvailableSeats();        
theatre.cancelSeat(3);       
theatre.cancelSeat(4);  
theatre.bookSeat(8);     
theatre.bookSeat(2);    
theatre.bookSeat(6);     
theatre.viewAvailableSeats(); 
