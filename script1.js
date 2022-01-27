function autoRefresh(){
    window.location = window.location.href;
}
function data() {

    var x = document.getElementById("pin").value;
    var y = document.getElementById("date").value;

    y = y.split("-").reverse().join("-");
     if (x == "") {
        alert(" Enter Pincode");
    }
    else if (y == "") {
        alert(" Enter Date");
    }
        else if(x==""&&y==""){
        alert("Enter Pincode And Date");
    }
    else {
        const api_url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" + x + "&date=" + y;
        console.log(api_url);
        async function getuser() {
            const response = await fetch(api_url);
            const data = await response.json();
            if (data.sessions == "") {
                document.getElementById("q").style.display = "block";
            }
            else {
                 document.getElementById("z").style.display = "block";
                document.getElementById("reg").style.display = "block";
                document.getElementById("z").scrollIntoView();
                // document.getElementById("a").innerHTML = data.sessions[0].center_id;
                document.getElementById("d").innerHTML = data.sessions[0].state_name;
                document.getElementById("e").innerHTML = data.sessions[0].district_name;
                document.getElementById("b").innerHTML = data.sessions[0].name;
                document.getElementById("c").innerHTML = data.sessions[0].address;
                // document.getElementById("f").innerHTML = data.sessions[0].block_name;
                document.getElementById("g").innerHTML = data.sessions[0].pincode;
                document.getElementById("j").innerHTML = data.sessions[0].date;
                document.getElementById("h").innerHTML = data.sessions[0].from;
                document.getElementById("i").innerHTML = data.sessions[0].to;
                document.getElementById("n").innerHTML = data.sessions[0].fee_type;
                document.getElementById("k").innerHTML = data.sessions[0].fee;
                // document.getElementById("l").innerHTML = data.sessions[0].lat;
                // document.getElementById("m").innerHTML = data.sessions[0].long;
                // document.getElementById("o").innerHTML = data.sessions[0].session_id;
                // document.getElementById("p").innerHTML = data.sessions[0].available_capacity;
                // document.getElementById("q").innerHTML = data.sessions[0].available_capacity_dose1;
                // document.getElementById("r").innerHTML = data.sessions[0].available_capacity_dose2;
                // document.getElementById("s").innerHTML = data.sessions[0].min_age_limi;
                // document.getElementById("t").innerHTML = data.sessions[0].max_age_limit;
                // document.getElementById("u").innerHTML = data.sessions[0].allow_all_age;
                document.getElementById("v").innerHTML = data.sessions[0].vaccine;
                // document.getElementById("w").innerHTML = data.sessions[0].slots;
            }
        }
        getuser();
    }
}
