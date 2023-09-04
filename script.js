function generateRandomMessage() {
  const messages = [
    "Wear the old coat and buy the new book.",
    "Time you enjoy wasting is not wasted time.",
    "For you, a thousand times over.",
    "And that's the thing about people who mean everything they say. They think everyone else does too.",
    "Of all the hardships a person had to face, none was more punishing than the simple act of waiting.",
    "Time can be a greedy thing-sometimes it steals the details for itself.",
    "But better to get hurt by the truth than comforted with a lie.",

    "You will never be able to escape from your heart. So it's better to listen to what it has to say.",
    "People are capable, at any time in their lives, of doing what they dream of.",
    "The simple things are also the most extraordinary things, and only the wise can see them.",

    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "May your coming year be filled with magic and dreams and good madness. I hope you read some fine books and kiss someone who thinks you're wonderful, and don't forget to make some art. And I hope, somewhere in the next year, you surprise yourself.",
    "The world always seems brighter when you've just made something that wasn't there before.",
    "Have you ever been in love? Horrible, isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "Grown-ups don't look like grown-ups on the inside either. Outside, they're big and thoughtless and they always know what they're doing. Inside, they look just like they always have. Like they did when they were your age. Truth is, there aren't any grown-ups. Not one, in the whole wide world.",
    "Google can bring you back 100,000 answers. A librarian can bring you back the right one.",
    "Things need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.",
    "We who make stories know that we tell lies for a living. But they are good lies that say true things, and we owe it to our readers to build them as best we can.",
    "Sometimes the best way to learn something is by doing it wrong and looking at what you did.",
    "Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody — no matter how dull and boring they are on the outside. Inside them they've all got unimaginable, magnificent, wonderful, stupid, amazing worlds... Not just one world. Hundreds of them. Thousands, maybe.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "You get what anybody gets - you get a lifetime.",
    "Picking up the first of his tools, he had stolen from other stories: bits of this, a chunk of that, and two tablespoons of something else.",
    "Tomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.",
    "I believe that stories are incredibly important, possibly in ways we don't understand, in allowing us to make sense of our lives, in allowing us to escape our lives, in giving us empathy and in creating the world that we live in.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "It's like the people who believe they'll be happy if they go and live somewhere else, but who learn it doesn't work that way. Wherever you go, you take yourself with you. If you see what I mean.",
    "I'm not sure that a bad person can write a good book. If art doesn't make us better, then what on earth is it for?",
    "Tomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.",
    "Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.",
    "It has always been the prerogative of children and half-wits to point out that the emperor has no clothes. But the half-wit remains a half-wit, and the emperor remains an emperor.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "Grown-ups don't look like grown-ups on the inside either. Outside, they're big and thoughtless and they always know what they're doing. Inside, they look just like they always have. Like they did when they were your age. Truth is, there aren't any grown-ups. Not one, in the whole wide world.",
    "Google can bring you back 100,000 answers. A librarian can bring you back the right one.",
    "The world always seems brighter when you've just made something that wasn't there before.",
    "Things need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.",
    "We who make stories know that we tell lies for a living. But they are good lies that say true things, and we owe it to our readers to build them as best we can.",
    "Sometimes the best way to learn something is by doing it wrong and looking at what you did.",
    "Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody — no matter how dull and boring they are on the outside. Inside them they've all got unimaginable, magnificent, wonderful, stupid, amazing worlds... Not just one world. Hundreds of them. Thousands, maybe.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",
    "You get what anybody gets - you get a lifetime.",
    "Picking up the first of his tools, he had stolen from other stories: bits of this, a chunk of that, and two tablespoons of something else.",
    "Tomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.",
    "I believe that stories are incredibly important, possibly in ways we don't understand, in allowing us to make sense of our lives, in allowing us to escape our lives, in giving us empathy and in creating the world that we live in.",
    "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision.",

    "Out beyond the ideas of right-doing and wrong-doing, there is a field. I'll meet you there.",
    "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
    "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
    "When you play the game of thrones, you win or you die. There is no middle ground.",

    "Laughter is poison to fear.",
    "The true dragons are not slaves.",
    "A person can only be brave when he is afraid.",
    "The world is full of horrors, but there are no horrors for me, now that I have you.",
    "The things we do for love.",
    "Different roads sometimes lead to the same castle.",
    "Sleep is good, he said. And books are better.",
    "The world is not in your books and maps, it's out there.",
    "My brother has his sword, King Robert has his warhammer and I have my mind... and a mind needs books as a sword needs a whetstone, if it is to keep its edge.",
    "You are never too old to set another goal or to dream a new dream.",
    "Do not dare not to dare.",
    "Integrity is doing the right thing, even when no one is watching.",
    "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "There are far better things ahead than any we leave behind.",
    "We are what we believe we are.",
    "Courage, dear heart.",
    "No one ever told me that grief felt so like fear.",
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    "The task of the modern educator is not to cut down jungles, but to irrigate deserts.",
    "I can't imagine a man really enjoying a book and reading it only once.",
    "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained.",
    "There is a kind of happiness and wonder that makes you serious. It is too good to waste on jokes.",
    "No book is really worth reading at the age of ten which is not equally – and often far more – worth reading at the age of fifty and beyond.",
    "Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.",
    "To love is to be vulnerable.",
    "It may be hard for an egg to turn into a bird: it would be a jolly sight harder for it to learn to fly while remaining an egg.",
    "Isn't it funny how day by day nothing changes, but when you look back, everything is different.",
    "Some day you will be old enough to start reading fairy tales again.",
    "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
    "You can never get a cup of tea large enough or a book long enough to suit me.",
    "You are never too old to set another goal or to dream a new dream.",
    "Do not dare not to dare.",
    "Integrity is doing the right thing, even when no one is watching.",
    "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "There are far better things ahead than any we leave behind.",
    "We are what we believe we are.",
    "Courage, dear heart.",
    "No one ever told me that grief felt so like fear.",
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    "The task of the modern educator is not to cut down jungles, but to irrigate deserts.",
    "I can't imagine a man really enjoying a book and reading it only once.",
    "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained.",
    "There is a kind of happiness and wonder that makes you serious. It is too good to waste on jokes.",
    "No book is really worth reading at the age of ten which is not equally – and often far more – worth reading at the age of fifty and beyond.",
    "Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.",
    "To love is to be vulnerable.",
    "It may be hard for an egg to turn into a bird: it would be a jolly sight harder for it to learn to fly while remaining an egg.",
    "Isn't it funny how day by day nothing changes, but when you look back, everything is different.",
    "Some day you will be old enough to start reading fairy tales again.",
    "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
    "You can never get a cup of tea large enough or a book long enough to suit me.",

    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness.",
    "It was one of those March days when the sun shines hot and the wind blows cold: when it is summer in the light, and winter in the shade.",
    "We need never be ashamed of our tears.",
    "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
    "No one is useless in this world who lightens the burdens of another.",
    "Words are, of course, the most powerful drug used by mankind.",
    "If history were taught in the form of stories, it would never be forgotten.",
    "A woman's guess is much more accurate than a man's certainty.",

    "Happiness is as exclusive as a butterfly, and you must never pursue it. If you stay very still, it may come and settle on your hand. But only briefly. Savour those moments, for they will not come in your way very often.",
    "The past is always with us, for it feeds the present.",
    "It's always the same with mountains. Once you have lived with them for any length of time, you belong to them. There is no escape.",
    "The adventure is not in getting somewhere, it's in the getting there.",
    "The only thing you cannot plan in life is when and who to fall in love with.",
    "Life's good, I'm not complaining. But the happiest part of my life was all spent in Mussoorie.",
    "It is always the same with mountains. Once you have lived with them for any length of time, you belong to them. There is no escape.",
    "Books, like landscapes, leave their marks in us.",
    "Time is not a thing, thus nothing which is, and yet it remains constant in its passing away without being something temporal like the beings in time.",
    "There are some things about my life that I would like to change. But if I changed my past, I wouldn't be the same person I am now.",

    "Those who don't believe in magic will never find it.",
    "If you have good thoughts, they will shine out of your face like sunbeams, and you will always look lovely.",
    "A person is a fool to become a writer. His only compensation is absolute freedom.",
    "Somewhere inside all of us is the power to change the world.",
    "A little nonsense now and then is relished by the wisest men.",
    "A person who has good thoughts cannot ever be ugly.",
    "It's impossible to make your eyes twinkle if you aren't feeling twinkly yourself.",
    "Grown-ups are complicated creatures, full of quirks and secrets.",
    "If you are going to get anywhere in life you have to read a lot of books.",
    "Above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places.",

    "Not all those who wander are lost.",
    "Courage is found in unlikely places.",
    "All we have to decide is what to do with the time that is given us.",
    "Even the smallest person can change the course of the future.",
    "The world is indeed full of peril, and in it, there are many dark places. But still, there is much that is fair. And though in all lands, love is now mingled with grief, it still grows, perhaps, the greater.",
    "I wish it need not have happened in my time,' said Frodo. 'So do I,' said Gandalf, 'and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.",
    "The road goes ever on and on, down from the door where it began. Now far ahead the road has gone, and I must follow if I can.",
    "I will not say: do not weep; for not all tears are an evil.",
    "There is some good in this world, and it's worth fighting for.",
    "Faithless is he that says farewell when the road darkens.",

    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "Today you are you! That is truer than true! There is no one alive who is you-er than you!",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    "You'll miss the best things if you keep your eyes shut.",
    "Don't cry because it's over. Smile because it happened.",
    "Sometimes the questions are complicated and the answers are simple.",
    "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
    "You're never too old, too wacky, too wild, to pick up a book and read to a child.",
    "Only you can control your future.",
    "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    "It is our choices that show what we truly are, far more than our abilities.",
    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "We do not need magic to change the world, we carry all the power we need inside ourselves already.",
    "The world is full of wonderful things you haven't seen yet. Don't ever give up on the chance of seeing them.",
    "Happiness can be found, even in the darkest of times if one only remembers to turn on the light.",
    "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
    "Numbing the pain for a while will make it worse when you finally feel it.",
    "You sort of start thinking anything's possible if you've got enough nerve.",
    "It matters not what someone is born, but what they grow to be.",
    "It does not do to dwell on dreams and forget to live.",
    "There is something delicious about writing the first words of a story. You never quite know where they'll take you.",
    "Thank goodness I was never sent to school; it would have rubbed off some of the originality.",
    "I remember I used to half believe and wholly play with fairies when I was a child. What heaven can be more real than to retain the spirit-world of childhood?",
    "I cannot rest, I must draw, however poor the result, and when I have a bad time come over me it is a stronger desire than ever.",
    "I hold that a strongly marked personality can influence descendants for generations.",
    "Most people, after one success, are so cringingly afraid of doing less well that they rub all the edge off their subsequent work.",
    "Believe there is a great power silently working all things for good, behave yourself and never mind the rest.",
    "The place which you have selected for your garden, though small, is shady, and as healthful a spot as you could have found in which to pitch your tent.",
    "I cannot rest, I must draw, however poor the result, and when I have a bad time come over me it is a stronger desire than ever.",
    "Thank goodness I was never sent to school; it would have rubbed off some of the originality.",
    "There is nothing in the world so irresistibly contagious as laughter and good humor.",
    "The pain of parting is nothing to the joy of meeting again.",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const messageDisplay = document.getElementById("messageDisplay");
  messageDisplay.innerText = messages[randomIndex];
}
