$(document).ready(function() {

  $('div').hide();
  $('.issue-info-right').hide();
  $('.issue-info-left').hide();

  // Animate 'Find My Ideal Candidate' button
  $('.enter-button').mouseenter(function() {
    $(this).filter(':not(:animated)').animate({
      height: '+=15px',
      width: '+=15px'
    });
  }, function() {
    $(this).animate({
      height: '+=15px',
      width: '+=15px'
    });
  });
  $('.enter-button').mouseleave(function() {
    $(this).filter(':not(:animated)').animate({
      height: '-=15px',
      width: '-=15px'
    });
  }, function() {
    $(this).animate({
      height: '-=15px',
      width: '-=15px'
    });
  });

  // Return previous matches
  $('.prev-match').click(function() {
    $('.top-bar').animate({
      'margin': '1.5% 0 0 0'
    }, 1000);
    $('div').show();
    $('.about-main').hide();
    $('.issues').hide();
    $('.buttons').hide();
    $('.landing').slideUp();
    $('.head-bar').slideUp();
    $('.results').fadeIn('slow');

    $('.match-pic-1').append('<img class="match" src=' + localStorage.matchImage1 + '>');
    $('.match-info-1').prepend('<h4 class="match">' + localStorage.matchName1 + '</h4>');
    $('.match-score-1').prepend('<h2 class="match">' + ((localStorage.matchScore1 / 21) * 100).toFixed() + '%</h2>');
    $('.affiliation-1').append(' ' + localStorage.matchAffiliation1);
    $('.position-1').append(' ' + localStorage.matchPosition1);
    $('.experience-1').append(' ' + localStorage.matchExperience1);

    $('.match-pic-2').append('<img class="match" src=' + localStorage.matchImage2 + '>');
    $('.match-info-2').prepend('<h4 class="match">' + localStorage.matchName2 + '</h4>');
    $('.match-score-2').prepend('<h2 class="match">' + ((localStorage.matchScore2 / 21) * 100).toFixed() + '%</h2>');
    $('.affiliation-2').append(' ' + localStorage.matchAffiliation2);
    $('.position-2').append(' ' + localStorage.matchPosition2);
    $('.experience-2').append(' ' + localStorage.matchExperience2);

    $('.match-pic-3').append('<img class="match" src=' + localStorage.matchImage3 + '>');
    $('.match-info-3').prepend('<h4 class="match">' + localStorage.matchName3 + '</h4>');
    $('.match-score-3').prepend('<h2 class="match">' + ((localStorage.matchScore3 / 21) * 100).toFixed() + '%</h2>');
    $('.affiliation-3').append(' ' + localStorage.matchAffiliation3);
    $('.position-3').append(' ' + localStorage.matchPosition3);
    $('.experience-3').append(' ' + localStorage.matchExperience3);
  });

  // Go to Overview page when 'Find My Perfect Candidate' is clicked
  $('.enter-button').on('click', function() {
    $('div').show();
    $('.tinder').hide();
    $('.buttons').hide();
    $('.results').hide();
    $('.landing').slideUp();
  });

  // Go to first issue page when 'Go!' is clicked
  $('.start-button').on('click', function() {
    $('.about-main').slideUp(1000);
    $('.guns').show();
    $('.gun-buttons').show();
    $('.top-bar').animate({
      'margin': '1% 0 0 0'
    }, 1000);
    if ($(window).width() <= 767){
  		$('.img-circle').slideUp();
	  } else {
      $('.img-circle').animate({
        'height': '100px',
        'width': '100px'
      }, 1000);
    };
  });

  // Object to store user responses
  var user = {};

  // Toggles additional issue info on hover
  $('.glyphicon').hover(function() {
    $('.issue-info-right').toggle();
    $('.issue-info-left').toggle();
  });

  // Beginning of policy evaluations
  $('.gun-button').click(function() {
    // Stores response in user object
    user.guns = this.value;
    for (var i = 0; i < candidates.length; i++) {
      // Adds 1 to match score if candidate and user have exact match
      if (this.value == candidates[i].guns) {
        candidates[i].matchScore += 1;
      };
      // Adds 0.5 to match score if candidate and user have soft match
      if (Math.abs(this.value - candidates[i].guns) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.guns').slideUp();
    $('.crime').fadeIn();
    $('.crime-buttons').show();
  });

  $('.crime-button').click(function() {
    user.crime = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].crime) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].crime) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.crime').slideUp();
    $('.healthcare').fadeIn();
    $('.healthcare-buttons').show();
  });

  $('.healthcare-button').click(function() {
    user.healthcare = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].healthcare) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].healthcare) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.healthcare').slideUp();
    $('.energy').fadeIn();
    $('.energy-buttons').show();

  });

  $('.energy-button').click(function() {
    user.energy = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].energy) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].energy) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.energy').slideUp();
    $('.drugs').fadeIn();
    $('.drugs-buttons').show();
  });

  $('.drugs-button').click(function() {
    user.drugs = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].drugs) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].drugs) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.drugs').slideUp();
    $('.taxes').fadeIn();
    $('.taxes-buttons').show();
  });

  $('.taxes-button').click(function() {
    user.taxes = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].taxes) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].taxes) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.taxes').slideUp();
    $('.immigration').fadeIn();
    $('.immigration-buttons').show();
  });

  $('.immigration-button').click(function() {
    user.immigration = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].immigration) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].immigration) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.immigration').slideUp();
    $('.ss').fadeIn();
    $('.ss-buttons').show();
  });

  $('.ss-button').click(function() {
    user.ss = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].ss) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].ss) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.ss').slideUp();
    $('.military').fadeIn();
    $('.military-buttons').show();
  });

  $('.military-button').click(function() {
    user.military = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].military) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].military) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.military').slideUp();
    $('.fp').fadeIn();
    $('.fp-buttons').show();
  });

  $('.fp-button').click(function() {
    user.fp = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].fp) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].fp) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.fp').slideUp();
    $('.tpp').fadeIn();
    $('.tpp-buttons').show();
  });

  $('.tpp-button').click(function() {
    user.tpp = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].tpp) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].tpp) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.tpp').slideUp();
    $('.marriage').fadeIn();
    $('.marriage-buttons').show();
  });

  $('.marriage-button').click(function() {
    user.marriage = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].marriage) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].marriage) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.marriage').slideUp();
    $('.religion').fadeIn();
    $('.religion-buttons').show();
  });

  $('.religion-button').click(function() {
    user.religion = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].religion) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].religion) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.religion').slideUp();
    $('.epa').fadeIn();
    $('.epa-buttons').show();
  });

  $('.epa-button').click(function() {
    user.epa = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].epa) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].epa) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.epa').slideUp();
    $('.voting').fadeIn();
    $('.voting-buttons').show();
  });

  $('.voting-button').click(function() {
    user.voting = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].voting) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].voting) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.voting').slideUp();
    $('.nsa').fadeIn();
    $('.nsa-buttons').show();
  });

  $('.nsa-button').click(function() {
    user.nsa = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].nsa) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].nsa) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.nsa').slideUp();
    $('.wages').fadeIn();
    $('.wages-buttons').show();
  });

  $('.wages-button').click(function() {
    user.wages = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].wages) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].wages) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.wages').slideUp();
    $('.citizens').fadeIn();
    $('.citizens-buttons').show();
  });

  $('.citizens-button').click(function() {
    user.citizens = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].citizens) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].citizens) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.citizens').slideUp();
    $('.abortion').fadeIn('slow');
    $('.abortion-buttons').show();
  });

  $('.abortion-button').click(function() {
    user.abortion = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].abortion) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].abortion) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.abortion').slideUp();
    $('.equalpay').fadeIn('slow');
    $('.equalpay-buttons').show();
  });

  $('.equalpay-button').click(function() {
    user.equalpay = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].equalpay) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].equalpay) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };
    $('.equalpay').slideUp();
    $('.aa').fadeIn('slow');
    $('.aa-buttons').show();
  });

  $('.aa-button').click(function() {
    user.aa = this.value;
    for (var i = 0; i < candidates.length; i++) {
      if (this.value == candidates[i].aa) {
        candidates[i].matchScore += 1;
      };
      if (Math.abs(this.value - candidates[i].aa) === 1) {
        candidates[i].matchScore += 0.5;
      };
    };

    // Sort candidates by match score
    candidates.sort(function(a, b) {
      return b.matchScore - a.matchScore;
    });


    $('.aa').slideUp();
    $('.head-bar').slideUp();
    $('.results').fadeIn('slow');

    // Adds candidate pictures to match table
    $('.match-pic-1').append('<img class="match" src=' + candidates[0].image + '>');
    $('.match-pic-2').append('<img class="match" src=' + candidates[1].image + '>');
    $('.match-pic-3').append('<img class="match" src=' + candidates[2].image + '>');
    // Add candidate names & info to match table
    $('.match-info-1').prepend('<h4 class="match">' + candidates[0].info.name + '</h4>');
    $('.match-info-2').prepend('<h4 class="match">' + candidates[1].info.name + '</h4>');
    $('.match-info-3').prepend('<h4 class="match">' + candidates[2].info.name + '</h4>');
    // Add candidate compatibility score to match table
    $('.match-score-1').prepend('<h2 class="match">' + ((candidates[0].matchScore / 21) * 100).toFixed() + '%</h2>');
    $('.match-score-2').prepend('<h2 class="match">' + ((candidates[1].matchScore / 21) * 100).toFixed() + '%</h2>');
    $('.match-score-3').prepend('<h2 class="match">' + ((candidates[2].matchScore / 21) * 100).toFixed() + '%</h2>');
    // Add candidate affiliation to match table
    $('.affiliation-1').append(' ' + candidates[0].info.affiliation);
    $('.affiliation-2').append(' ' + candidates[1].info.affiliation);
    $('.affiliation-3').append(' ' + candidates[2].info.affiliation);
    // Add candidate position to match table
    $('.position-1').append(' ' + candidates[0].info.position);
    $('.position-2').append(' ' + candidates[1].info.position);
    $('.position-3').append(' ' + candidates[2].info.position);
    // Add candidate experience to match table
    $('.experience-1').append(' ' + candidates[0].info.experience);
    $('.experience-2').append(' ' + candidates[1].info.experience);
    $('.experience-3').append(' ' + candidates[2].info.experience);

    // Store matches in local storage
    localStorage.setItem('matchImage1', candidates[0].image)
    localStorage.setItem('matchScore1', candidates[0].matchScore)
    localStorage.setItem('matchName1', candidates[0].info.name)
    localStorage.setItem('matchAffiliation1', candidates[0].info.affiliation)
    localStorage.setItem('matchPosition1', candidates[0].info.position)
    localStorage.setItem('matchExperience1', candidates[0].info.experience)

    localStorage.setItem('matchImage2', candidates[1].image)
    localStorage.setItem('matchScore2', candidates[1].matchScore)
    localStorage.setItem('matchName2', candidates[1].info.name)
    localStorage.setItem('matchAffiliation2', candidates[1].info.affiliation)
    localStorage.setItem('matchPosition2', candidates[1].info.position)
    localStorage.setItem('matchExperience2', candidates[1].info.experience)

    localStorage.setItem('matchImage3', candidates[2].image)
    localStorage.setItem('matchScore3', candidates[2].matchScore)
    localStorage.setItem('matchName3', candidates[2].info.name)
    localStorage.setItem('matchAffiliation3', candidates[2].info.affiliation)
    localStorage.setItem('matchPosition3', candidates[2].info.position)
    localStorage.setItem('matchExperience3', candidates[2].info.experience)
  });

});


// Candidate profiles

var trump = {
  info: {
    name: "Donald Trump",
    affiliation: "Republican Party",
    position: "President, Trump Organization",
    experience: "Never held office"
  },
  matchScore: 0,
  guns: 1,
  crime: 5,
  healthcare: 2,
  energy: 1,
  drugs: 2,
  taxes: 4,
  immigration: 1,
  ss: 4,
  military: 5,
  fp: 4,
  tpp: 2,
  marriage: 2,
  religion: 5,
  epa: 1,
  voting: 4,
  nsa: 2,
  wages: 1,
  citizens: 4,
  abortion: 2,
  equalpay: 3,
  aa: 4,
  image: "images/trump.jpg"
};

var sanders = {
  info: {
    name: "Bernie Sanders",
    affiliation: "Democratic Party",
    position: "U.S. Senator (Vermont)",
    experience: "34 years"
  },
  matchScore: 0,
  guns: 3,
  crime: 1,
  healthcare: 5,
  energy: 5,
  drugs: 5,
  taxes: 5,
  immigration: 4,
  ss: 1,
  military: 2,
  fp: 5,
  tpp: 1,
  marriage: 5,
  religion: 1,
  epa: 5,
  voting: 5,
  nsa: 5,
  wages: 5,
  citizens: 5,
  abortion: 5,
  equalpay: 5,
  aa: 5,
  image: "images/sanders.jpg"
};

var johnson = {
  info: {
    name: "Gary Johnson",
    affiliation: "Libertarian Party",
    position: "Former Governor of New Mexico",
    experience: "8 years"
  },
  matchScore: 0,
  guns: 1,
  crime: 2,
  healthcare: 1,
  energy: 2,
  drugs: 5,
  taxes: 1,
  immigration: 5,
  ss: 4,
  military: 1,
  fp: 5,
  tpp: 4,
  marriage: 5,
  religion: 4,
  epa: 2,
  voting: 2,
  nsa: 5,
  wages: 3,
  citizens: 4,
  abortion: 4,
  equalpay: 2,
  aa: 4,
  image: "images/johnson.jpg"
};

var rubio = {
  info: {
    name: "Marco Rubio",
    affiliation: "Republican Party",
    position: "U.S. Senator (Florida)",
    experience: "15 years"
  },
  matchScore: 0,
  guns: 1,
  crime: 5,
  healthcare: 2,
  energy: 2,
  drugs: 1,
  taxes: 1,
  immigration: 2,
  ss: 2,
  military: 5,
  fp: 1,
  tpp: 5,
  marriage: 1,
  religion: 5,
  epa: 1,
  voting: 2,
  nsa: 1,
  wages: 2,
  citizens: 1,
  abortion: 1,
  equalpay: 2,
  aa: 2,
  image: "images/rubio.jpg"
};

var clinton = {
  info: {
    name: "Hillary Clinton",
    affiliation: "Democratic Party",
    position: "Former Secretary of State",
    experience: "12 years"
  },
  matchScore: 0,
  guns: 5,
  crime: 2,
  healthcare: 5,
  energy: 5,
  drugs: 3,
  taxes: 5,
  immigration: 4,
  ss: 1,
  military: 2,
  fp: 2,
  tpp: 2,
  marriage: 5,
  religion: 2,
  epa: 5,
  voting: 5,
  nsa: 4,
  wages: 4,
  citizens: 5,
  abortion: 5,
  equalpay: 5,
  aa: 5,
  image: "images/clinton.jpg"
};

var kasich = {
  info: {
    name: "John Kasich",
    affiliation: "Republican Party",
    position: "Governor of Ohio",
    experience: "26 years"
  },
  matchScore: 0,
  guns: 1,
  crime: 4,
  healthcare: 2,
  energy: 2,
  drugs: 1,
  taxes: 1,
  immigration: 2,
  ss: 5,
  military: 2,
  fp: 2,
  tpp: 3,
  marriage: 3,
  religion: 5,
  epa: 3,
  voting: 4,
  nsa: 2,
  wages: 3,
  citizens: 3,
  abortion: 2,
  equalpay: 2,
  aa: 4,
  image: "images/kasich.jpg"
};

var cruz = {
  info: {
    name: "Ted Cruz",
    affiliation: "Republican Party",
    position: "U.S. Senator",
    experience: "2 years"
  },
  matchScore: 0,
  guns: 1,
  crime: 5,
  healthcare: 1,
  energy: 1,
  drugs: 2,
  taxes: 1,
  immigration: 1,
  ss: 5,
  military: 5,
  fp: 2,
  tpp: 5,
  marriage: 1,
  religion: 5,
  epa: 2,
  voting: 3,
  nsa: 4,
  wages: 1,
  citizens: 1,
  abortion: 1,
  equalpay: 2,
  aa: 2,
  image: "images/cruz.jpg"
};

var stein = {
  info: {
    name: "Jill Stein",
    affiliation: "Green Party",
    position: "Physician",
    experience: "Never held office"
  },
  matchScore: 0,
  guns: 5,
  crime: 1,
  healthcare: 5,
  energy: 5,
  drugs: 5,
  taxes: 5,
  immigration: 5,
  ss: 1,
  military: 1,
  fp: 5,
  tpp: 1,
  marriage: 5,
  religion: 1,
  epa: 5,
  voting: 5,
  nsa: 5,
  wages: 5,
  citizens: 5,
  abortion: 5,
  equalpay: 5,
  aa: 5,
  image: "images/stein.jpg"
};

var candidates = [trump, sanders, johnson, rubio, clinton, kasich, cruz, stein]
