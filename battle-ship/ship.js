// factory function to add length, hit counter, hit function to increase hit counter, and check if ship is sunken
export function createShip(totalLength, shipName) {
    return {
        name: shipName,
        length: totalLength,
        hitCount: 0,
        hit: function() {
            this.hitCount++;
        },
        isSunk: function() {
            if (this.hitCount === this.length) {
                return true;
            } else {
                return false;
            }
        }
    }
}
