class vehicleSalesHistory{
    constructor(model, colour, manufacturer, year, vehiclesSold) {
        this.model = model;
        this.colour = colour;
        this.manufacturer = manufacturer;
        this.year = year;
        this.vehiclesSold = vehiclesSold;
    }
    // Function gets number of vehicles sold by each manufacturer between 2011 & 2020
    numberOfVehiclesSold = async () => {
        try {
            const result = await fetch('data.json');
            const data = await result.json();
            data.forEach(vhs => {
                const year = vhs.salesHistory[0].year;
                const salesNumbers = vhs.salesHistory[0].vehiclesSold;
                if (year >= 2013 && year <= 2020) console.log(`${vhs.model} - ${salesNumbers}`)
            });
        } catch(err) {
            console.log(err)
        }
    }

    // Function gets the manufactuer who sold the largest number of vehicles between 2011 & 2020
    manufacturerSoldTheMost = async() => {
        try {
            const result = await fetch('data.json');
            const data = await result.json();
            let salesNumbers = 0;
            let highestSales = 0;
            let highestSaler;
            data.forEach(vhs => {
                salesNumbers = vhs.salesHistory[0].vehiclesSold;
                if (salesNumbers > highestSales) {
                    highestSales = salesNumbers;
                    highestSaler = vhs.manufacturer;
                }
            });
            console.log(`${highestSaler} sold the most with ${highestSales} vehicles sold.`)
        } catch(err) {
            console.log(err)
        }
    }

    // Function gets the average number of vehicles sold among all manufacturers between 2011 & 2020
    averageNumberSold = async() => {
        try {
            const result = await fetch('data.json');
            const data = await result.json();
            let numberOfMan = 0;
            let totalSold = 0;
            let average;
            data.forEach(vsh => {
                numberOfMan += 1;
                totalSold += vsh.salesHistory[0].vehiclesSold;
            });
            average = Math.round(totalSold / numberOfMan);
            console.log(`The average number of vehicles sold across all ${numberOfMan} manufacturers is ${average}`)
        } catch (err) {
            console.log(err);
        }
    }

    // Function to get the most common vehicle colour
    mostCommonColour = async () => {
        const result = await fetch('data.json');
        const data = await result.json();
        let colours = [];
        let theColor = [];
        let tColor = '';
        let temp = 0;
        let numberOfAppearancesBlue = 0;
        let numberOfAppearancesRed = 0;
        let numberOfAppearancesSilver = 0;
        let numberOfAppearancesWhite = 0;
        let numberOfAppearancesYellow = 0;
        let numberOfAppearances = 0;
        data.forEach(vsh => {
            colours.push(vsh.colour);
        });
        colours.sort();
        console.log(colours)
        
        colours.forEach(color => {
            tColor = color;
            numberOfAppearances += 1;
            for (let i = 0; i < colours.length; i++) {
                const currentColor = colours[i];
                if (currentColor === tColor) {
                    numberOfAppearances += 1;
                    colours.splice(i,1)
                }
            }
            // theColor.push(tColor, numberOfAppearances);
            // tColor = null;
        });
        console.log(colours)
    }

    colourAppearance = (color) => {
        
    }
}

const vsh = new vehicleSalesHistory();
vsh.mostCommonColour();