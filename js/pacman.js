var pacman = pacman || {};

pacman = {
    Game:class{
        constructor(){
            this.tablero =  [['· ','· ','· ','· ','· ','· ',1,1,'· ','· ',1,1,'· ',0,'· ','· ','· ','· '],
                           ['· ',1,1,1,'· ','· ',1,1,'· ','· ',1,1,'· ','· ','· ',1,1,'· '],
                           ['· ',1,'· ','· ',1,'· ','· ','· ','· ','· ','· ','· ','· ','· ','· ','· ',1,'· '],
                           ['· ','· ','· ','· ',1,'· ',1,1,'· ','· ',1,1,'· ',1,'· ',1,1,'· '],
                           ['. ',1,'· ' ,1,'· ','· ','· ','.','·','· ','· ','· ','· ' ,1,'· ','· ','· ','· '],
                           ['X','· ','· ' ,'· ','· ',1,'· ','.',1,1,1,'· ','· ' ,1,'· ','· ','· ','· ']];
            this.row
            this.column;
            this.columnGhost;
            this.rowGhost;
            this.help = '·';
            this.tableroJuego();
            this.pacman();
            this.ghost();
        }


        tableroJuego(){

            let table = document.getElementById("table");

            for (let i = 0; i < this.tablero.length; i++) {
                var row = table.insertRow(i);
                for (let j = 0; j < this.tablero[i].length; j++) {
                    var cell = row.insertCell(j);
                    cell.innerHTML = this.tablero[i][j];
                    if(this.tablero[i][j] == 'X'){
                        this.row = i;
                        this.column = j;
                    }
                    if(this.tablero[i][j] == 0){
                        this.rowGhost = i;
                        this.columnGhost = j;
                    }
                }
            }
        }

        pacman(){
            
            //1->arriba
            //2->abajo 
            //3->derecha
            //4->izquierda
            let but = document.getElementById("play");
            
                but.addEventListener("click", ()=>{
                
                let movimiento = document.getElementById("mov").value;
                if(movimiento == 1){
                    if(!this.tablero[this.row-1] || this.tablero[this.row-1][this.column] === "undefined" || this.tablero[this.row-1][this.column] == 1){
                        
                        document.getElementById("info").innerHTML = "Chocaste!";
                    }else{
                        if(this.tablero[this.row-1][this.column] == 0){
                            this.tablero[this.row-1][this.column] = 0;
                        }else{
                            this.tablero[this.row-1][this.column] = 'X';
                        }
                        this.tablero[this.row][this.column] = this.help;
                        this.row--;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 2){
                    if(!this.tablero[this.row+1] || this.tablero[this.row+1][this.column] === "undefined" || this.tablero[this.row+1][this.column] == 1){
                        document.getElementById("info").innerHTML = "Chocaste!";
                    }else{
                        this.tablero[this.row+1][this.column] = 'X';
                        this.tablero[this.row][this.column] = this.help;
                        this.row++;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 3){
                    if(!this.tablero[this.row][this.column-1] || this.tablero[this.row][this.column-1] === "undefined" || this.tablero[this.row][this.column-1] == 1){
                        document.getElementById("info").innerHTML = "Chocaste!";
                    }else{
                        this.tablero[this.row][this.column-1] = 'X';
                        this.tablero[this.row][this.column] = this.help;
                        this.column--;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 4){
                    if(!this.tablero[this.row][this.column+1] || this.tablero[this.row][this.column+1] === "undefined" || this.tablero[this.row][this.column+1] == 1){
                        document.getElementById("info").innerHTML = "Chocaste!";
                    }else{
                        this.tablero[this.row][this.column+1] = 'X';
                        this.tablero[this.row][this.column] = this.help;
                        this.column++;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }
                
            },false);
        }

        ghost(){
            
            
            let but = document.getElementById("play");
            but.addEventListener("click", ()=>{
                
                let movimiento = Math.round(Math.random()* (4-1 +1)+1) ;
                console.log(movimiento);
                if(movimiento == 1){
                    if(!this.tablero[this.rowGhost-1] || this.tablero[this.rowGhost-1][this.columnGhost] === "undefined" || this.tablero[this.rowGhost-1][this.columnGhost] == 1){
                        //this.ghost();
                        document.getElementById("info2").innerHTML = "El fantasma chocó";
                    }else{
                        this.tablero[this.rowGhost-1][this.columnGhost] = 0;
                        this.tablero[this.rowGhost][this.columnGhost] = this.help;
                        this.rowGhost--;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 2){
                    if(!this.tablero[this.rowGhost+1] || this.tablero[this.rowGhost+1][this.columnGhost] === "undefined" || this.tablero[this.rowGhost+1][this.columnGhost] == 1){
                        //this.ghost();
                        document.getElementById("info2").innerHTML = "El fantasma chocó";
                    }else{
                        this.tablero[this.rowGhost+1][this.columnGhost] = 0;
                        this.tablero[this.rowGhost][this.columnGhost] = this.help;
                        this.rowGhost++;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 3){
                    if(!this.tablero[this.rowGhost][this.columnGhost-1] || this.tablero[this.rowGhost][this.columnGhost-1] === "undefined" || this.tablero[this.rowGhost][this.columnGhost-1] == 1){
                        //this.ghost();
                        document.getElementById("info2").innerHTML = "El fantasma chocó";
                    }else{
                        this.tablero[this.rowGhost][this.columnGhost-1] = 0;
                        this.tablero[this.rowGhost][this.columnGhost] = this.help;
                        this.columnGhost--;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }else if(movimiento == 4){
                    if(!this.tablero[this.rowGhost][this.columnGhost+1] || this.tablero[this.rowGhost][this.columnGhost+1] === "undefined" || this.tablero[this.rowGhost][this.columnGhost+1] == 1){
                        //this.ghost();
                        document.getElementById("info2").innerHTML = "El fantasma chocó";
                    }else{
                        this.tablero[this.rowGhost][this.columnGhost+1] = 0;
                        this.tablero[this.rowGhost][this.columnGhost] = this.help;
                        this.columnGhost++;
                        document.getElementById("table").innerHTML = '';
                        this.tableroJuego();
                    }
                }
                    if(this.rowGhost == this.row && this.columnGhost == this.column){
                        document.getElementById("play").disabled = true;
                    }
            },false);
        }

        
    }
}