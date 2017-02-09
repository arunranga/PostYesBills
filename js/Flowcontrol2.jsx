var moonPhase = 'full';


if (moonPhase === 'full' && foggyNight) {
  console.log('Howwlll!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') { 
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

switch (moonPhase) {
  case 'full':
    console.log('Howwwwlllll');
    break;
  case 'mostly full':
    console.log('5 o\'clock shadow');
    break;
  case 'mostly new':
    console.log('walkin and talkin');
    break;
  default:
    console.log('what are you talking bout bro???');
    break;
}
