var num = localStorage.getItem('number');
            if(num==null){
    
            }else{
                var old_tbody = document.getElementById("bruh");
                
                
                
                for(i=0;i<=num;i++){
                    
                    var words = JSON.parse(localStorage.getItem(i));
                    var newRow = old_tbody.insertRow(0);
                var Cell = newRow.insertCell(0);
                var Cell1 = newRow.insertCell(1);
                var Cell2 = newRow.insertCell(2);
                var Cell3 = newRow.insertCell(3);
                Cell.innerHTML = words[0];
                Cell1.innerHTML = words[1];
                Cell2.innerHTML = words[2];
                Cell3.innerHTML = words[3];
            
            }
            
        }
        
        function readText () {
            var n = localStorage.getItem('number');
            if (n === null) {
                n = 0;
            } else {
                n++;
            }
                localStorage.setItem('number',n);
                var name,skill,level,comment;
                name = document.getElementById("name").value;
                level = document.getElementById("level").value;
                skill = document.getElementById("skill").value;
                comment = document.getElementById("comment").value;
                
                localStorage.setItem(n,JSON.stringify([name,skill,level,comment]));
    
                
                location.reload(true);
                
            }
            function clcl(){
                localStorage.clear();
            }
