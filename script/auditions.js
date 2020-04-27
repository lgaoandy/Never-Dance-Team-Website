var NWarea = [
    "Arbour Lake",
    "Banff Trail",
    "Beddington Heights",
    "Bowness",
    "Brentwood",
    "Cambrian Heights",
    "Charleswood",
    "Citadel",
    "Cityscape",
    "Collingwood",
    "Capitol Hill",
    "Crescent Heights",
    "Dalhousie",
    "Country Hills",
    "Edgemont",
    "Evanston",
    "Greenview",
    "Greenwood - Greenbriar",
    "Hamptons",
    "Harvest Hills",
    "Hawkwood",
    "Hidden Valley",
    "Highland Park",
    "Highwood",
    "Hillhurst",
    "Hounsfield Heights - Briar Hill",
    "Huntington Hills",
    "Kincora",
    "MacEwan Glen",
    "Montgomery",
    "Mount Pleasant",
    "Nolan Hill",
    "North Haven",
    "Panorama Hills",
    "Parkdale",
    "Parkhill",
    "Patterson",
    "Point McKay",
    "Ranchlands",
    "Rocky Ridge",
    "Rosedale",
    "Rosemont",
    "Royal Oak",
    "Sage Hill",
    "Sandstone Valley",
    "Scenic Acres",
    "Sherwood",
    "Silver Springs",
    "Sunny Side",
    "Thorncliffe",
    "Tuscany",
    "Tuxedo Park",
    "University Heights",
    "Valley Ridge",
    "Varsity",
    "West Hillhurst",
    "St Andrews Heights"
];
var NEarea = [
    "Bridgeland - Riverside",
    "Castleridge",
    "Coral Springs",
    "Crossroads",
    "Coventry Hills",
    "Falconridge",
    "Marlborough Park",
    "Marlborough",
    "Martindale",
    "Mayland Heights",
    "Monterey Park",
    "Pineridge",
    "Redstone",
    "Renfrew",
    "Taradale",
    "Temple",
    "Mountview - Winston Heights",
    "Rundle",
    "Saddle Ridge",
    "Skyview Ranch",
    "Vista Heights",
    "Whitehorn"
];
var SEarea = [
    "Abbeydale",
    "Acadia",
    "Albert Park - Radisson Heights",
    "Applewood Park",
    "Auburn Bay",
    "Bonavista Downs",
    "Chaparral",
    "Cranston",
    "Copperfield",
    "Deer Ridge",
    "Deer Run",
    "Diamond Cove",
    "Douglasdale - Glen",
    "Dover",
    "Downtown East Village",
    "Erin Woods",
    "Erlton",
    "Fairview",
    "Forest Heights",
    "Forest Lawn",
    "Inglewood",
    "Killarney - Glengarry",
    "Lake Bonavista",
    "Legacy",
    "Mahogany",
    "Maple Ridge",
    "McKenzie Lake",
    "McKenzie Towne",
    "Midnapore",
    "New Brighton",
    "Ogden - Lynnwood",
    "Parkland",
    "Penbrooke Meadows",
    "Quarry Park",
    "Queensland",
    "Ramsay",
    "Red Carpet",
    "Riverbend",
    "Seton",
    "Southview",
    "Sundance",
    "Victoria",
    "Vista Heights",
    "Walden",
    "Southview",
    "Sundance",
    "Willow Park"
];
var SWarea = [
    "Altadore - Marda Loop",
    "Aspen Woods",
    "Bankview",
    "Bayview",
    "Bel Aire",
    "Beltline",
    "Braeside",
    "Bridlewood",
    "Britannia",
    "Canyon Meadows",
    "Cedarbrae",
    "CFB Currie",
    "CFB Lincoln Park PMQ",
    "Chinatown",
    "Chinook Park",
    "Christie Park",
    "Cliff Bungalow",
    "Coach Hill",
    "Connaught",
    "Cougar Ridge",
    "Crestmont",
    "Discovery Ridge",
    "Downtown Commercial Core",
    "Downtown West End",
    "Eagle Ridge",
    "Eau Claire",
    "Elbow Park",
    "Elboya",
    "Evergreen",
    "Garrison Woods",
    "Glamorgan",
    "Glenbrook",
    "Glendale",
    "Glengarry",
    "Haysboro",
    "Kelvin Grove",
    "Killarney",
    "Kingsland",
    "Lakeview",
    "Lincoln Park",
    "Marda Loop - Altadore",
    "Mayfair",
    "Millrise",
    "Mission",
    "Meadowlark Park",
    "Mount Royal Lower",
    "Mount Royal Upper",
    "North Glenmore Park",
    "Oakridge",
    "Palliser",
    "Pump Hill",
    "Richmond",
    "Rideau Park",
    "Rosscarrock",
    "Roxboro",
    "Rutland Park",
    "Scarboro - Sunalta West",
    "Shaganappi",
    "Shawnee Slopes - Evergreen Estates",
    "Shawnessy",
    "Signal Hill Signature Park",
    "Silverado",
    "Somerset",
    "South Calgary",
    "Southwood",
    "Springbank Hill",
    "Spruce Cliff",
    "Stanley Park",
    "Strathcona",
    "Strathcona Park",
    "Sunalta",
    "Sunnyside",
    "West Springs",
    "Westgate",
    "Westhills",
    "Wildwood",
    "Windsor Park",
    "Woodbine",
    "Woodlands"
];

// Generate a HTML options for communities based on the area
function generateSelectOptions(area){
    switch (area){
        case 'NW':
            var area = NWarea;
            break;
        case 'NE':
            var area = NEarea;
            break;
        case 'SE':
            var area = SEarea;
            break;
        case 'SW':
            var area = SWarea;
            break;
    }
    var optionlist = '<option value="" disabled selected>-- Select --</option>';
    $.each(area, function(i, community){
        optionlist += '<option value="'+community+'">'+community+'</option>';
    });
    return optionlist;
}
$(document).on('change', '.area-select', function(){
    let value = this.value;
    if (value !== 'other'){
        var options = generateSelectOptions(value);
        $('.community-select').empty().append(options);
        $('.other-community').fadeOut();
        $('.community-label').fadeIn();
        $('.community-select').fadeIn();
    }
    else {
        $('.community-label').prop('hidden', true);
        $('.community-select').prop('hidden', true);
        $('.other-community').prop('hidden', false);
    }
});

// Customized radio buttons
$(document).on('click', '.radio label input', function(){
    $(this).parents('.radio').children('label').css('background-color','gainsboro');
    $(this).parent('label').css('background-color','grey');
});

// Specific Radio Groups
$(document).on('click', '.transport-radio label input', function(){
    if (this.value === 'other'){
        $('.other-transportation').fadeIn('fast');
    }
    else {
        $('.other-transportation').fadeOut('fast');
    }
});

$(document).on('click', '.curfew-radio label input', function(){
    if (this.value === 'yes'){
        $('.curfew-time').fadeIn('fast');
    }
    else {
        $('.curfew-time').fadeOut('fast');
    }
});

$(document).on('click', '.availability-radio label input', function(){
    if (this.value === 'partially'){
        $('.availability').fadeIn('fast');
    }
    else {
        $('.availability').fadeOut('fast');
    }
});

$(document).on('input', '.skill-slider', function(){
    var value = this.value;
    var level;
    switch (value){
        case '1':
            level = 'Inexperienced';
            break;
        case '2':
            level = "Casual";
            break;
        case '3':
            level = "Beginner";
            break;
        case '4':
            level = "Dance Trainee";
            break;
        case '5':
        case '6':
            level = "Intermediate";
            break;
        case '7':
            level = "Advanced";
            break;
        case '8':
            level = "Professional";
            break;
        case '9':
            level = "Lead Dancer";
            break;
        case '10':
            level = "Main Dancer";
            break;
    }
    $('.slider-value').empty().append(level);
});