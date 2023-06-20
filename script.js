let greetings = ["Bonjour", "Hello", "Hola", "Ciao", "Hallo", "Hej", "Olà", "Konnichiwa", "Annyeonghaseyo"]; // Tableau contenant les différentes versions de "Bonjour"

    let greetingIndex = 0; // Index pour parcourir le tableau greetings

    function changeGreeting() {
      document.getElementById("greeting").innerHTML = greetings[greetingIndex]; // Changer le texte du h1 avec la version actuelle de "Bonjour"
      greetingIndex = (greetingIndex + 1) % greetings.length; // Passer à la version suivante de "Bonjour"

      setTimeout(changeGreeting, 300); // Définir un délai de 2 secondes avant de passer à la version suivante
    }

    // Appeler la fonction changeGreeting pour démarrer le défilement des salutations
    changeGreeting();


    // Récupérer l'élément du texte à animer
let typingEffect = document.getElementById('typing-effect');

// Récupérer le texte à animer
const text = typingEffect.innerText;

// Remplacer le texte par une chaîne vide pour la phase d'animation
typingEffect.innerText = '';

// Fonction pour animer le texte caractère par caractère
function typeWriter(text, index) {
  if (index < text.length) {
    typingEffect.innerText += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 100); // Temps d'attente entre chaque caractère (100 millisecondes)
  }
}

// Démarrer l'animation du texte
typeWriter(text, 0);




