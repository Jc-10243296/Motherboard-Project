// window.addEventListener('DOMContentLoaded', () => {
//     const question = document.querySelector('.question')
//     const answer1 = document.querySelector('.answer1')
//     const answer2 = document.querySelector('.answer2')
//     const answer3 = document.querySelector('.answer3')
//     const answer4 = document.querySelector('.answer4')
//     startButton.addEventListener('click', question)
//     answer1Sect.addEventListener('click', answer1)
//     answer2Sect.addEventListener('click', answer2)
//     answer3Sect.addEventListener('click', answer3)
//     answer4Sect.addEventListener('click', answer4)
// });

// let correctAnswer = 4;
// let answerTypes = [0, 1, 2, 3];

// questionButton = document.getElementById('button');

var correctAnswer = 4;


function askQuestion() {
    document.getElementById('answer1Sect').style.backgroundColor = 'white';
    document.getElementById('answer2Sect').style.backgroundColor = 'white';
    document.getElementById('answer3Sect').style.backgroundColor = 'white';
    document.getElementById('answer4Sect').style.backgroundColor = 'white';

    //alert('button works')
    question = Math.round(Math.random() * 19);
    //question = 0;
    if (question == 0) {
        const question = document.getElementById("question");
        question.innerHTML = "What does CPU Stand For?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Control Positional Unit";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Central Processing Unit";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Computer Programmed Utensil";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Central Protesting Unit";
        correctAnswer = 1;
    }
    if (question == 1) {
        const question = document.getElementById("question");
        question.innerHTML = "What do the North and South Bridge do On a Motherboard?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "They do nothing, just get really hot";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "They control the CPU and make sure it does it functuons correctly";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "It aids the CPU to help it do its job";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "It is a useless piece of metal";
        correctAnswer = 2;
    }
    if (question == 2) {
        const question = document.getElementById("question");
        question.innerHTML = "Why do we need coils in our motherboards?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "To maintain and regulate electricity flow";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "To resist electricity flow";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "To build up electricity";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "To crash the motherboard if it reaches a certain current threshold";
        correctAnswer = 0;
    }
    if (question == 3) {
        const question = document.getElementById("question");
        question.innerHTML = "How long do most CMOS Batteries last for?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "A week";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "A lifetime";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "A decade";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "A few years";
        correctAnswer = 3;
    }
    if (question == 4) {
        const question = document.getElementById("question");
        question.innerHTML = "How many Transistors are inside of modern CPU?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "264 Million";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "122 thousand";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "2.5 thousand";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "582 Million";
        correctAnswer = 3;
    }
    if (question == 5) {
        const question = document.getElementById("question");
        question.innerHTML = "Why do we need Sata Ports?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "To connect serial ports";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "To power a motherboard";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "To translate binary";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "To connect hard drive";
        correctAnswer = 3;
    }
    if (question == 6) {
        const question = document.getElementById("question");
        question.innerHTML = "What happens when we touch a motherboard with static electricity?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Nothing";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "The static shock kills you";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "The motherboard resets";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "The motherboard breaks";
        correctAnswer = 3;
    }
    if (question == 7) {
        const question = document.getElementById("question");
        question.innerHTML = "What do we connect PCI-E to?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Graphic Cards";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Computer Case";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "RAM";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Each other";
        correctAnswer = 0;
    }
    if (question == 8) {
        const question = document.getElementById("question");
        question.innerHTML = "What do Diodes do?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Connect electrical connections";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Divert electric flow";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Regulate current";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Allow electricity to flow in one direction";
        correctAnswer = 3;
    }
    if (question == 9) {
        const question = document.getElementById("question");
        question.innerHTML = "Why do we need a 4 pin CPU power connector when we have an ATX connector?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Maintain electricity flow to a CPU";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Divert Electricity Flow to a CPU";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Provide additional power to CPU";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Overclock your CPU";
        correctAnswer = 2;
    }
    if (question == 10) {
        const question = document.getElementById("question");
        question.innerHTML = "What is the pin format of a CPU?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "50x50";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Land Gtid Array";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Zero Insertion Force";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Socket or Slot";
        correctAnswer = 1;
    }
    if (question == 11) {
        const question = document.getElementById("question");
        question.innerHTML = "What do ROM and RAM stand for?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Random Output Memory & Read Analog Memory";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Reflexive Access Memory & Random Output Memory";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Read Only Memory & Random Axis Memory";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Random Access Memory and Read Only Memory";
        correctAnswer = 3;
    }
    if (question == 12) {
        const question = document.getElementById("question");
        question.innerHTML = "Older versions of Expension Slots? (not PCI & PCIE)";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "AMR";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "ISA";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "AGP";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "all of the aboce";
        correctAnswer = 3;
    }
    if (question == 13) {
        const question = document.getElementById("question");
        question.innerHTML = "Electromic Components of the motherboard include?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Coils, Ports, Metal";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Coils, Transistors, and Capacitors";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Wire, Capacitors, Bridges";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "There are no electrical components on a motherboard";
        correctAnswer = 1;
    }
    if (question == 14) {
        const question = document.getElementById("question");
        question.innerHTML = "What do Jumpers do? Why do we need them?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "They control settings on your motherboard to make power and reset buttons work";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "They connect wires to one another to create a closed circuit";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "They Hop for Educational Purposes";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "They are pins needed to provide electricity";
        correctAnswer = 0;
    }
    if (question == 15) {
        const question = document.getElementById("question");
        question.innerHTML = "Where can you find the most transistors on a motherboard?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Underneath the motherboard";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "On the CPU fan";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Near the South Bridge";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "On the CPU";
        correctAnswer = 3;
    }
    if (question == 16) {
        const question = document.getElementById("question");
        question.innerHTML = "What the CMOS Stand for?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Centered Metallic Oxygen Supplier";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Corrupt Magnetic Operation System";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Complementary Metal Oxide Semiconductor";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Corrupt Magnetic Operation Switch";
        correctAnswer = 2;
    }
    if (question == 17) {
        const question = document.getElementById("question");
        question.innerHTML = "What does ROM BIOS Stand for?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Read Only Memoir, Basic Input Output System";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Random Operative Memory, Basic In Out System";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Read Only Memory, Basic Input Output System";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Ranked Operative Memory, Biased Input Outpot System";
        correctAnswer = 2;
    }
    if (question == 18) {
        const question = document.getElementById("question");
        question.innerHTML = "What is the color of Advanced Graphic Ports?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Brown";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Red";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "Gray";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "Blue";
        correctAnswer = 0;
    }
    if (question == 19) {
        const question = document.getElementById("question");
        question.innerHTML = "What are the different types of PCIE?";
        const answer1 = document.getElementById("answer1");
        answer1.innerHTML = "1x, 2x, 4x, 8x, 16x";
        const answer2 = document.getElementById("answer2");
        answer2.innerHTML = "1x, 4x, 8x, 16x";
        const answer3 = document.getElementById("answer3");
        answer3.innerHTML = "1x, 8x, 16x";
        const answer4 = document.getElementById("answer4");
        answer4.innerHTML = "1x, 16x";
        correctAnswer = 1;
    }
}

function answer1() {
    //alert('button2 works')
    if (correctAnswer == 4) {
        alert('press new question button first')
    } else if (correctAnswer == 0) {
        document.getElementById('answer1Sect').style.backgroundColor = 'green';
        // alert('Correct')
    } else {
        document.getElementById('answer1Sect').style.backgroundColor = 'red';
        // alert('Incorrect')
    }
}

function answer2() {
    //alert('button3 works')
    if (correctAnswer == 4) {
        alert('press new question button first')
    } else if (correctAnswer == 1) {
        document.getElementById('answer2Sect').style.backgroundColor = 'green';
        // alert('Correct')
    } else {
        // alert('Incorrect')
        document.getElementById('answer2Sect').style.backgroundColor = 'red';
    }
}

function answer3() {
    //alert('button4 works')
    if (correctAnswer == 4) {
        alert('press new question button first')
    } else if (correctAnswer == 2) {
        // alert('Correct')
        document.getElementById('answer3Sect').style.backgroundColor = 'green';
    } else {
        // alert('Incorrect')
        document.getElementById('answer3Sect').style.backgroundColor = 'red';
    }
}

function answer4() {
    //alert('button5 works')
    if (correctAnswer == 4) {
        alert('press new question button first')
    } else if (correctAnswer == 3) {
        // alert('Correct')
        document.getElementById('answer4Sect').style.backgroundColor = 'green';
    } else {
        // alert('Incorrect')
        document.getElementById('answer4Sect').style.backgroundColor = 'red';
    }
}