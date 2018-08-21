// AUTO RUNS THE FUNCTION
(()=>{

    let database = firebase.database();
    let ref = database.ref("gameon/scorecard");
    ref = ref.child("5b7bbb6633c13d2f65bea07b");

    ref.on('value', (snapshot)=> {
        console.log(snapshot.val());
        let elem1 = document.querySelector("#id1");
        let elem2 = document.querySelector("#id2");

        let dataRef = snapshot.val();
        if(dataRef && dataRef.matchEvents && dataRef.matchEvents.data && dataRef.matchEvents.data.innings){
            let baseref = dataRef.matchEvents.data.innings;

            let first = baseref[0].inningDetail || {};
            let second = baseref[1].inningDetail || {};

            let firstName = first.batTeamId.name || "";
            let secondName = second.batTeamId.name || "";
            let tokens = secondName.split(/\s+/g);
            secondName = (tokens && tokens.length > 1) ? tokens[0] : secondName;

            let firstData = `${firstName} - ${first.inningScore}/${first.inningWicket}`;
            let secondData = `${secondName} - ${second.inningScore}/${second.inningWicket}`; 

            elem1.innerHTML = firstData;
            elem2.innerHTML = secondData;
        }

    });

})();