var noOfObjects = 0;
var totalProperties = 0;
var names = [];
var values = [];
var noOfValues = 0;

//intialise the number of objects and call the function to get no of keys
function createJson(){

    noOfObjects = document.getElementById('total-object').value;
    let print = `<div class="text-center py-3"><label for="total-properties">Total Number of Properties</label><input type="number" name="total-properties" id="total-properties"></div><div class="text-center"><button class="btn custom-btn" onclick="getProperties()">Next</button></div>`;
    document.getElementById('main-data').innerHTML = print;
}

function getProperties(){

    let print = "";
    totalProperties = document.getElementById('total-properties').value;
    for(let i=0;i<totalProperties;i++)
    {
        print += `<div class="text-center py-3"><span class="pe-1">${i+1}.</span><label for="each-property" class="pe-1">Property Name</label><input type="text" name="each-property" id="property-${i+1}"></div>`;
    }
    print += `<div class="text-center"><button class="btn custom-btn" onclick="getPropertyNames()">Next</button></div>`;
    document.getElementById('main-data').innerHTML = print;
}

function getPropertyNames(){

    let print = "";
    let temp = null;
    for(let i=0;i < totalProperties;i++)
    {
        temp = document.getElementById(`property-${i+1}`).value;
        names.push(temp);
    }
    for(let j=0;j<noOfObjects;j++)
    {
        print += `<div>Object No ${j+1}</div>`;
        for(let k=0;k < totalProperties;k++)
        {
        print += `<div class="text-center py-3"><span class="pe-1">${k+1}.</span><label for="each-property" class="pe-1">${names[k]}</label><input type="text" name="each-value" id="value-${noOfValues}"></div>`;
        noOfValues++;
        }
    }
    print += `<div class="text-center"><button class="btn custom-btn" onclick="saveValues()">Generate JSON</button></div>`;
    document.getElementById('main-data').innerHTML = print;
}

function saveValues(){

    for(let i=0;i < noOfValues;i++)
    {
        temp = document.getElementById(`value-${i}`).value;
        values.push(temp);
    }
    console.log(names);
    console.log(values);

    let j=0;
    let objArray=[];
    while(j<noOfValues)
    {
        let jsonData = {};
        console.log(totalProperties);
        for(let k=0;k<totalProperties;k++)
        {   
            console.log(names[k]+" "+values[j]);
            jsonData[names[k]]=values[j];
            j++;
        }
        console.log(jsonData);
        objArray.push(jsonData);
        console.log(objArray);
    }
    /*jsonData[names[0]] = values[0];
    jsonData[names[1]] = values[1];*/
    console.log(objArray);
    console.log(typeof objArray);
    let data = JSON.stringify(objArray,null,2);

    localStorage.setItem('jsonData',data);
    window.location.href = "download.html";

}