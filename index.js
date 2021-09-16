// console.log("OK....")


fetch('https://api.github.com/users/destirstn')
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.getElementById('username').innerHTML = data.login
        // document.getElementById('lokasi').innerHTML = data.location
        

        // style css
        document.getElementById('avatar').style.width = "300px";
        document.getElementById('avatar').style.borderRadius = "30px";
        document.getElementById('avatar').style.display = "block";
        document.getElementById('avatar').style.marginLeft = "auto";
        document.getElementById('avatar').style.marginRight = "auto";
 
        document.getElementById('username').style.textAlign = "center";
        document.getElementById('username').style.marginLeft = "auto";

        document.getElementById('type').style.textAlign = "center";
        document.getElementById('type').style.marginLeft = "auto";


        document.getElementById('idAkun').style.display = "block";
        document.getElementById('idAkun').style.marginLeft = "auto";
        document.getElementById('idAkun').style.marginRight = "auto";
        document.getElementById('idAkun').style.marginTop = "20px";

        
    //     document.getElementById('idAkun').addEventListener('click', displayAlert);
    //     function displayAlert() {
    //     alert("id = 88821524");

        
    // }

        document.getElementById('submit').style.display = "block";
        document.getElementById('submit').style.marginLeft = "auto";
        document.getElementById('submit').style.marginRight = "auto";
        document.getElementById('submit').style.marginTop = "20px";

        document.getElementById('submit').addEventListener('onClick', displayAlert);
        function displayAlert() {
        alert("jika ingin melihat lebih banyak data Api Github saya, bisa dilihat pada insepect > console");

        
    }


})