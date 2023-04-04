export function gameboard() {
    return {
        position: [],
        createGameboard: function() {
            for (let i = 0; i <= 9; i++) {
                this.position[i] = [];
                for (let j = 0; j <= 9; j++) {
                    this.position[i][j] = null;
                }
            }
            console.log(this.position);
        }
    }
};
