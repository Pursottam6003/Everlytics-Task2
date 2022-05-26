
let tble = document.getElementById('html-data-table');

 
document.getElementById('btn').onclick = function CreateTableFromJSON() {
    let Mymachines = [
        ["machine_name","machine_id","current",
        "voltage","power_factor","active_power",
        "apparent_power","reactive_power","daily_energy",
        "monthly_energy","yearly_energy","idle_daily",
        "idle_monthly","idle_yearly"],
        ["Auto Winding Machine", "machine001", 
        0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0], 
        ["Boiler Machine", "machine004", 0, 0, 0, 
        0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
    ]
    
    // get table from html
    if(tble.style.opacity==0)
    {

        // create new row under table for each machine
        for (let i = 1; i < Mymachines.length ; i++) {
            let tr = document.createElement('tr');
            let row = tble.appendChild(tr);
    
            for (let j = 0; j < Mymachines[0].length; j++) {
                let td = document.createElement('td');
                td.innerHTML = Mymachines[i][j];
                row.appendChild(td);
            }
        }
        tble.style.opacity="1";
    }
   
}
 
 