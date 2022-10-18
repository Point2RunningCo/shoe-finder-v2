

// Variables for selecting different questions and shoe categories

const shoeUse = document.querySelector('#shoeUse');
const mileage = document.querySelector('#mileage');
const races = document.querySelector('#races');
const arch = document.querySelector('#arch');
const legs = document.querySelector('#legs');
const kneeTrack = document.querySelector('#kneeTrack');
const cushion = document.querySelector('#cushion');
const brand = document.querySelector('#brand');
const gender = document.querySelector('#gender');
const mNeutralLight = document.querySelectorAll('.mNeutralLight');
const mNeutralMid = document.querySelectorAll('.mNeutralMid');
const mNeutralMax = document.querySelectorAll('.mNeutralMax');
const mStabilityLight = document.querySelectorAll('.mStabilityLight');
const mStabilityMid = document.querySelectorAll('.mStabilityMid');
const mStabilityMax = document.querySelectorAll('.mStabilityMax');
const wNeutralLight = document.querySelectorAll('.wNeutralLight');
const wNeutralMid = document.querySelectorAll('.wNeutralMid');
const wNeutralMax = document.querySelectorAll('.wNeutralMax');
const wStabilityLight = document.querySelectorAll('.wStabilityLight');
const wStabilityMid = document.querySelectorAll('.wStabilityMid');
const wStabilityMax = document.querySelectorAll('.wStabilityMax');

// Variable that holds users support needed

let supportLevel = 0;

// Users intended use for shoes

document.querySelector('#running').addEventListener('click', running);
document.querySelector('#walking').addEventListener('click', walking);
document.querySelector('#everyday').addEventListener('click', everyday);

// functions below hide question once answered and progress to next question

function running() {
    shoeUse.classList.add('hidden');
    mileage.classList.toggle('hidden');
}

function walking() {
    shoeUse.classList.add('hidden');
    mileage.classList.toggle('hidden');
}

function everyday() {
    shoeUse.classList.add('hidden');
    mileage.classList.toggle('hidden');
}

// Mileage

document.querySelector('#underTen').addEventListener('click', underTen);
document.querySelector('#tenToTwenty').addEventListener('click', tenToTwenty);
document.querySelector('#moreThanThirty').addEventListener('click', moreThanThirty);

function underTen() {
    mileage.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

function tenToTwenty() {
    mileage.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

function moreThanThirty() {
    mileage.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

// Events the user is training for

// document.querySelector('#raceSubmit').addEventListener('click', upcomingRaces);

// function upcomingRaces() {
//     races.classList.toggle('hidden');
//     arch.classList.toggle('hidden');
// }

// Arch type

document.querySelector('#archUnsure').addEventListener('click', archUnsure);
document.querySelector('#flatArch').addEventListener('click', flatArch);
document.querySelector('#normArch').addEventListener('click', normArch);
document.querySelector('#highArch').addEventListener('click', highArch);

function archUnsure() {
    document.querySelector('#archUnsureCont').classList.toggle('hidden');
}

function flatArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

function normArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = 0;
}

function highArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

// Leg shape

document.querySelector('#knockKnee').addEventListener('click', knockKnee);
document.querySelector('#straightLegs').addEventListener('click', straightLegs);
document.querySelector('#bow').addEventListener('click', bow);

function knockKnee() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

function straightLegs() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
}

function bow() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

// Knee track

document.querySelector('#rotateOut').addEventListener('click', rotateOut);
document.querySelector('#straight').addEventListener('click', straight);
document.querySelector('#rotateIn').addEventListener('click', rotateIn);

function rotateOut() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

function straight() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
}

function rotateIn() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

// Injury history

// document.querySelector('#injurySubmit').addEventListener('click', injuries);

// function injuries() {
//     injury.classList.toggle('hidden');
//     cushion.classList.toggle('hidden');

// }

// Desried cushion level

document.querySelector('#lightFast').addEventListener('click', lightFast);
document.querySelector('#midCushion').addEventListener('click', midCushion);
document.querySelector('#maxCushion').addEventListener('click', maxCushion);

let cushionLevel = 'error';

function lightFast() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#lightFast').value;
}

function midCushion() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#midCushion').value;

}

function maxCushion() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#maxCushion').value;
}

// Preferred brands

// document.querySelector('#brandSubmit').addEventListener('click', brandSubmit);

// function brandSubmit() {
//     brand.classList.toggle('hidden');
//     gender.classList.toggle('hidden');
// }

// Gender

let shoeGender;
document.querySelector('#womensShoes').addEventListener('click', womensShoes);
document.querySelector('#mensShoes').addEventListener('click', mensShoes);

function womensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    shoeGender = 'womens';
    finalResult();
}

function mensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    shoeGender = 'mens';
    finalResult();
}

// Desired size

// Display category user needs based on support needs, desired cushion, and gender.
document.querySelector('#shoeCatInfo').addEventListener('click', showCatInfo);

function showCatInfo() {
    document.querySelector('#shoeCatInfoCont').classList.toggle('hidden');
}


function finalResult() {
    if (supportLevel > 0 && cushionLevel === 'lightFast' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        mStabilityLight.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel > 0 && cushionLevel === 'midCushion' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        mStabilityMid.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel > 0 && cushionLevel === 'maxCushion' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        mStabilityMax.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'lightFast' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        mNeutralLight.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'midCushion' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        mNeutralMid.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'maxCushion' && shoeGender === 'mens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        mNeutralMax.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel > 0 && cushionLevel === 'lightFast' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        wStabilityLight.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel > 0 && cushionLevel === 'midCushion' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        wStabilityMid.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel > 0 && cushionLevel === 'maxCushion' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Stability Shoe!';
        wStabilityMax.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'lightFast' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        wNeutralLight.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'midCushion' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        wNeutralMid.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else if (supportLevel <= 0 && cushionLevel === 'maxCushion' && shoeGender === 'womens') {
        document.querySelector('#displayResult').innerText = 'You need a Neutral Shoe!';
        wNeutralMax.forEach(x => {
            x.classList.toggle('hidden');
        })
    } else {
        document.querySelector('#result').innerText = 'Error';
    }
}

function refreshPage() {
    window.location.reload();
}

// Tasks
// Add Back button
// Add restart button
// Only show brands selected
// Show recommended insoles based on leg and arch type
// Show injury support accessories based on items checked
// Show nutrition based on races selected