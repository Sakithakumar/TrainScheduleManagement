<script>
    const schedule = {
        trains: [],
        
        addTrain(trainNumber, arrivalTime, departureTime) {
            this.trains.push({ trainNumber, arrivalTime, departureTime });
        },
        
        displayTrains() {
            const tbody = document.getElementById('train-schedule').getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';
            
            this.trains.forEach((train, index) => {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td>${train.trainNumber}</td>
                    <td>${train.arrivalTime}</td>
                    <td>${train.departureTime}</td>
                    <td><button id="cancel"onclick="cancelTrain(${index})">Cancel</button></td>`;
            });
        }
    };

    function addTrain() {
        const trainNumber = document.getElementById('trainNumber').value.trim();
        const arrivalTime = document.getElementById('arrivalTime').value.trim();
        const departureTime = document.getElementById('departureTime').value.trim();

        if (trainNumber && arrivalTime && departureTime) {
            schedule.addTrain(trainNumber, arrivalTime, departureTime);
            
            // Clear input fields
            document.getElementById('trainNumber').value = '';
            document.getElementById('arrivalTime').value = '';
            document.getElementById('departureTime').value = '';

            schedule.displayTrains();
        } else {
          alert("Please fill in all fields.");
        }
    }

    function cancelTrain(index) {
        schedule.trains.splice(index, 1);
        schedule.displayTrains();
    }
</script>
