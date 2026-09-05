/* =========================================================
   OUR LITTLE WORLD ❤️
   FINAL CORRECTED script.js
   CHAPTER 1 + CHAPTER 2 PRESERVED
   CHAPTER 3 NAVIGATION + CELEBRATION FIXED
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       1. GLOBAL ELEMENTS
    ========================================================= */

    const welcomeScreen = document.getElementById("welcomeScreen");
    const storyScreen = document.getElementById("storyScreen");

    const lockButton = document.getElementById("lockButton");
    const passwordOverlay = document.getElementById("passwordOverlay");
    const closeButton = document.getElementById("closeButton");
    const passwordInput = document.getElementById("passwordInput");
    const unlockButton = document.getElementById("unlockButton");
    const errorMessage = document.getElementById("errorMessage");

    const successScreen = document.getElementById("successScreen");

    const loveSong = document.getElementById("loveSong");
    const chapterTwoSong = document.getElementById("chapterTwoSong");

    const chapterTwoSection = document.getElementById("chapterTwo");
    const openChapterTwoButton = document.getElementById("openChapterTwo");
    const startYearTwoButton = document.getElementById("startYearTwo");


    /* =========================================================
       2. PASSWORD
    ========================================================= */

    const SECRET_PASSWORD = "Neyam";


    /* =========================================================
       3. PASSWORD MODAL
    ========================================================= */

    function openPasswordModal() {

        if (!passwordOverlay) return;

        passwordOverlay.classList.add("active");

        setTimeout(() => {
            passwordInput?.focus();
        }, 200);

    }


    function closePasswordModal() {

        if (!passwordOverlay) return;

        passwordOverlay.classList.remove("active");

        if (passwordInput) {
            passwordInput.value = "";
        }

        if (errorMessage) {
            errorMessage.textContent = "";
        }

    }


    lockButton?.addEventListener("click", openPasswordModal);

    closeButton?.addEventListener("click", closePasswordModal);

    passwordOverlay?.addEventListener("click", (event) => {

        if (event.target === passwordOverlay) {
            closePasswordModal();
        }

    });


    /* =========================================================
       4. UNLOCK STORY
    ========================================================= */

    function unlockStory() {

        if (!passwordInput) return;

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === SECRET_PASSWORD) {

            if (errorMessage) {
                errorMessage.textContent = "";
            }

            passwordOverlay?.classList.remove("active");

            if (successScreen) {
                successScreen.classList.add("active");
            }

            if (loveSong) {

                loveSong.volume = 0.45;

                loveSong.play().catch(() => {
                    console.log(
                        "Browser blocked automatic music playback."
                    );
                });

            }

            setTimeout(() => {
                openStoryScreen();
            }, 3000);

        } else {

            if (errorMessage) {

                errorMessage.textContent =
                    "Hmm... that's not our secret. Try again, Koko. ❤️";

            }

            passwordInput.classList.remove("shake");

            void passwordInput.offsetWidth;

            passwordInput.classList.add("shake");

            setTimeout(() => {
                passwordInput.classList.remove("shake");
            }, 500);

        }

    }


    unlockButton?.addEventListener("click", unlockStory);


    passwordInput?.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            unlockStory();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            passwordOverlay?.classList.contains("active")
        ) {

            closePasswordModal();

        }

    });


    /* =========================================================
       5. OPEN STORY SCREEN
    ========================================================= */

    function openStoryScreen() {

        successScreen?.classList.remove("active");

        if (welcomeScreen) {

            welcomeScreen.style.opacity = "0";
            welcomeScreen.style.pointerEvents = "none";

        }

        setTimeout(() => {

            if (welcomeScreen) {
                welcomeScreen.style.display = "none";
            }

            if (storyScreen) {

                storyScreen.classList.add("active");

                requestAnimationFrame(() => {
                    storyScreen.scrollTop = 0;
                });

            }

        }, 1000);

    }


    /* =========================================================
       6. CURSOR GLOW
    ========================================================= */

    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow) {

        document.addEventListener("mousemove", (event) => {

            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;

        });

    }


    /* =========================================================
       7. CHAPTER 1 PHOTO MEMORIES
    ========================================================= */

    const memories = [

        {
            image: "photo 2.jpeg",
            title: "The Beginning",
            text: "Where our little story quietly began. ❤️ A moment from our first year... 🏙️ Our First Trip — Chandigarh Jab hum pehli baar trip par Chandigarh gaye the, aur maine tumse pehli baar poocha tha, “Kahin chalein?” 🥹❤️ Us waqt pata nahi tha ki woh ek simple sa question humari itni beautiful memory ban jayega. Pura din tumhare saath rehna, ghoomna, baatein karna aur har little moment ko saath experience karna… woh feeling hi alag thi. ✨ "
        },

        {
            image: "photo 3.jpeg",
            title: "The First Moments",
            text: "Those early moments that slowly became something special. 🥹 Just an Unforgettable Memory Kuch memories ko explain karne ke liye words kaafi nahi hote. ❤️ Bas unhe yaad karte hi face par smile aa jaati hai aur dil mein woh same feeling wapas aa jaati hai. Humari woh memory bhi bilkul aisi hi hai — simple, beautiful aur completely unforgettable. 🫶🏻✨"
        },

        {
            image: "photo 4.jpeg",
            title: "Getting Closer",
            text: "Somewhere along the way, you became my favourite person. 🎬 Our First Movie Together, Theatre mein humari first movie Animal dekhna… 🎬❤️ Movie se zyada special toh tumhare saath woh poora experience tha. Aur movie ke baad room mein hum dono ka thoda wild ho jaana… 😏❤️‍🔥 Woh poora day humari un memories mein se hai jise hum shayad kabhi nahi bhoolenge."
        },

        {
            image: "photo 5.jpeg",
            title: "Little Memories",
            text: "The small moments that became some of my favourite memories. 📸 So Many Memories, Kabhi-kabhi sochti hoon toh realize hota hai ki humne saath mein kitni saari memories bana li hain. 🥹❤️ Kuch funny hain, kuch cute, kuch crazy aur kuch bilkul priceless. Har memory humari story ka ek chhota sa piece hai. 🧩💗"
        },

        {
            image: "photo 6.jpeg",
            title: "Together",
            text: "Every picture started carrying a little piece of us. 🎂 Your First Birthday With Me, Tumhara birthday pehli baar tumhare saath celebrate karna mere liye bahut special tha. 🎂❤️ Tumhare special day ka part banna, tumhe wish karna aur tumhare saath woh moments spend karna — it felt so beautiful. 🥹✨ Bas har saal tumhara birthday tumhare saath celebrate karna hai. 🫶🏻"
        },

        {
            image: "photo 7.jpeg",
            title: "Happy Us",
            text: "Just two people creating their own little world. Jagah Tere Saath Chalna Hai🚶🏻‍♀️,Mujhe sirf destinations nahi chahiye, mujhe tumhara saath chahiye. ❤️ Chahe koi beautiful place ho ya bas ek normal si road, main har jagah tumhare saath chalna chahti hoon. Haath mein haath ho aur saamne poori life. 🤝🏻✨"
        },

        {
            image: "photo 8.jpeg",
            title: "More Memories",
            text: "Another memory, another reason to smile. 💭 Our Memories, Humari memories ek collection hain un chhote-chhote moments ki jo humne saath feel kiye hain. ❤️ Har photo ke peeche ek story hai, har place ke peeche ek feeling aur har memory ke peeche hum dono. 🥹📸"
        },

        {
            image: "photo 9.jpeg",
            title: "Our Moments",
            text: "Some moments are impossible to forget.🫶🏻 Our Little Moments, Kabhi ek hug, kabhi ek smile, kabhi bina reason ke hasna aur kabhi bas ek dusre ke paas chup-chaap rehna… ❤️ Humare ye little moments hi toh humari relationship ko itna beautiful banate hain. 🥹✨"
        },

        {
            image: "photo 10.jpeg",
            title: "Growing Together",
            text: "Through everything, we kept choosing each other. ❤️ Loving Each Other More & More, Har din tumhe thoda aur jaan-na, tumhe thoda aur samajhna aur tumse aur zyada pyaar ho jaana. 🥹❤️ I don't know ki love ka koi limit hota hai yanahi, but I just know ki main tumhe har din pehle se zyada love karna chahti hoon. 🫶🏻♾️"
        },

        {
            image: "photo 11.jpeg",
            title: "Us",
            text: "A simple picture, but a very special memory.🏫 Every Corner of College....College ka shayad hi koi corner hoga jahan humne saath time na spend kiya ho. 😂❤️ Corridors, classrooms, random places, walks aur woh countless conversations… Har corner mein humari koi na koi memory chhupi hai. 🥹🏫💗"
        },

        {
            image: "photo 12.jpeg",
            title: "More Than Memories",
            text: "Three years filled with countless little moments.👀 The Way I Look At You.....Jis tarah tum mujhe dekhte ho, woh special hai… but the way I look at you is something I can't even explain. 🥹❤️ Tumhe dekhte hi automatically smile aa jaati hai. Shayad meri aankhon mein woh sab dikh jaata hai jo main words mein kabhi properly nahi keh paati. ✨"
        },

        {
            image: "photo 13.jpeg",
            title: "Still Us",
            text: "Different days, same two people.♾️ Always Love❤️......Chahe kitna bhi time pass ho jaaye, kitne bhi moments change ho jaayein, ek cheez hamesha same rehni chahiye — my love for you. ❤️ No matter what, I want our love to keep growing, changing and becoming stronger with every passing day. 🫶🏻♾️"
        },

        {
            image: "photo 14.jpeg",
            title: "Forever Moments",
            text: "The memories I would choose again and again. ✨ Moments That We'll Never Forget....Humari journey mein kuch moments aise hain jo time ke saath kabhi fade nahi honge. ❤️ Woh moments jo hum kabhi randomly yaad karenge aur ek dusre ko dekh kar bas smile karenge. 🥹 Because some moments don't just become memories — they become a part of us. ✨"
        },

        {
            image: "photo 15.jpeg",
            title: "Another Chapter",
            text: "And somehow, our story kept getting better.💕 All the Love Sprinklings💕......Humari story mein thoda sa love, thodi si madness, bahut saari hasi, countless hugs aur endless affection… 💕✨ Har chhoti-chhoti loving gesture ne humari relationship ko aur beautiful banaya hai. Bas aise hi humari life mein pyaar ki ye little sprinklings hamesha bani rahein. 🥹❤️"
        },

        {
            image: "photo 18.jpeg",
            title: "Three Years",
            text: "Three years of us. And this is still only the beginning. ❤️🎁 My First Birthday With You💕 Mera first birthday tumhare saath… 🎂❤️ Aur us din tumhara mujhe surprise dena — that feeling was something I'll always remember. 🥹🎁 Tumne mere birthday ko sirf special nahi banaya, tumne usse ek aisi memory bana diya jo main hamesha apne heart mein rakhungi. ❤️ My first birthday with you will always have a special place in our story. 🫶🏻✨"
        }

    ];


    /* =========================================================
       8. PHOTO MODAL
    ========================================================= */

    const photoStoryOverlay =
        document.getElementById("photoStoryOverlay");

    const photoStoryImage =
        document.getElementById("storyModalImage");

    const photoStoryTitle =
        document.getElementById("storyModalTitle");

    const photoStoryText =
        document.getElementById("storyModalText");

    const memoryCounter =
        document.getElementById("memoryCounter");

    const previousMemory =
        document.getElementById("previousMemory");

    const nextMemory =
        document.getElementById("nextMemory");

    const closePhotoStory =
        document.getElementById("storyCloseButton");

    let currentMemory = 0;


    /* =========================================================
       9. UPDATE PHOTO MODAL
    ========================================================= */

    function updatePhotoStory() {

        if (!memories.length) return;

        const memory = memories[currentMemory];

        if (photoStoryImage) {
            photoStoryImage.src = memory.image;
            photoStoryImage.alt = memory.title;
        }

        if (photoStoryTitle) {
            photoStoryTitle.textContent = memory.title;
        }

        if (photoStoryText) {
            photoStoryText.textContent = memory.text;
        }

        if (memoryCounter) {

            memoryCounter.textContent =
                `${String(currentMemory + 1).padStart(2, "0")} / ${String(memories.length).padStart(2, "0")}`;

        }

    }


    /* =========================================================
       10. OPEN PHOTO MODAL
    ========================================================= */

    function openPhotoStory(index) {

        if (!photoStoryOverlay) return;

        if (
            index < 0 ||
            index >= memories.length
        ) {
            return;
        }

        currentMemory = index;

        updatePhotoStory();

        photoStoryOverlay.classList.add("active");

        document.body.classList.add("modal-open");

    }


    /* =========================================================
       11. CLOSE PHOTO MODAL
    ========================================================= */

    function closePhotoStoryModal() {

        if (photoStoryOverlay) {
            photoStoryOverlay.classList.remove("active");
        }

        document.body.classList.remove("modal-open");

    }


    /* =========================================================
       12. NEXT / PREVIOUS PHOTO
    ========================================================= */

    function showNextMemory() {

        if (!memories.length) return;

        currentMemory =
            (currentMemory + 1) % memories.length;

        updatePhotoStory();

    }


    function showPreviousMemory() {

        if (!memories.length) return;

        currentMemory =
            (currentMemory - 1 + memories.length) %
            memories.length;

        updatePhotoStory();

    }


    /* =========================================================
       13. MEMORY CARD CLICK
    ========================================================= */

    const memoryCards =
        document.querySelectorAll(".memory-card");

    memoryCards.forEach((card, index) => {

        card.addEventListener("click", (event) => {

            if (event.target.closest("button")) {
                return;
            }

            const memoryIndex =
                Number(card.dataset.memory);

            if (
                Number.isInteger(memoryIndex) &&
                memoryIndex >= 0 &&
                memoryIndex < memories.length
            ) {

                openPhotoStory(memoryIndex);

            } else {

                openPhotoStory(index);

            }

        });

    });


    nextMemory?.addEventListener("click", (event) => {

        event.stopPropagation();
        showNextMemory();

    });


    previousMemory?.addEventListener("click", (event) => {

        event.stopPropagation();
        showPreviousMemory();

    });


    closePhotoStory?.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        closePhotoStoryModal();

    });


    photoStoryOverlay?.addEventListener("click", (event) => {

        if (event.target === photoStoryOverlay) {
            closePhotoStoryModal();
        }

    });


    /* =========================================================
       14. VIDEO MEMORIES
    ========================================================= */

    const videoOverlay =
        document.getElementById("videoOverlay");

    const videoPlayer =
        document.getElementById("memoryVideo");

    const videoStoryTitle =
        document.getElementById("videoModalTitle");

    const videoStoryText =
        document.getElementById("videoModalText");

    const closeVideoStory =
        document.getElementById("videoCloseButton");

    const videos = [

        {
            src: "video 1.mp4",
            title: "Our Little Moments",
            text: "A few seconds of us that are worth remembering forever."
        },

        {
            src: "video 2.mp4",
            title: "Another Memory",
            text: "Another little piece of our story. ❤️"
        }

    ];

    let currentVideo = 0;


    /* =========================================================
       15. OPEN VIDEO
    ========================================================= */

    function openVideoStory(index) {

        if (!videoOverlay) return;
        if (!videoPlayer) return;
        if (!videos[index]) return;

        currentVideo = index;

        const video = videos[index];

        videoPlayer.src = video.src;

        if (videoStoryTitle) {
            videoStoryTitle.textContent = video.title;
        }

        if (videoStoryText) {
            videoStoryText.textContent = video.text;
        }

        videoOverlay.classList.add("active");

        document.body.classList.add("modal-open");

        videoPlayer.currentTime = 0;

        videoPlayer.play().catch(() => {

            console.log(
                "Browser requires manual video playback."
            );

        });

    }


    /* =========================================================
       16. CLOSE VIDEO
    ========================================================= */

    function closeVideoStoryModal() {

        videoOverlay?.classList.remove("active");

        document.body.classList.remove("modal-open");

        if (videoPlayer) {

            videoPlayer.pause();
            videoPlayer.currentTime = 0;

        }

    }


    /* =========================================================
       17. VIDEO CARDS
    ========================================================= */

    const videoCards =
        document.querySelectorAll(".video-memory-card");

    videoCards.forEach((card, index) => {

        card.addEventListener("click", (event) => {

            event.stopPropagation();

            const videoIndex =
                Number(card.dataset.video);

            if (
                Number.isInteger(videoIndex) &&
                videoIndex >= 0 &&
                videoIndex < videos.length
            ) {

                openVideoStory(videoIndex);

            } else {

                openVideoStory(index);

            }

        });

    });


    closeVideoStory?.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        closeVideoStoryModal();

    });


    videoOverlay?.addEventListener("click", (event) => {

        if (event.target === videoOverlay) {
            closeVideoStoryModal();
        }

    });


    /* =========================================================
       18. ESCAPE KEY — CHAPTER 1 MODALS
    ========================================================= */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            passwordOverlay?.classList.contains("active")
        ) {

            closePasswordModal();
            return;

        }

        if (
            photoStoryOverlay?.classList.contains("active")
        ) {

            if (event.key === "ArrowRight") {
                showNextMemory();
            }

            if (event.key === "ArrowLeft") {
                showPreviousMemory();
            }

            if (event.key === "Escape") {
                closePhotoStoryModal();
            }

            return;

        }

        if (
            videoOverlay?.classList.contains("active") &&
            event.key === "Escape"
        ) {

            closeVideoStoryModal();

        }

    });


    /* =========================================================
       19. CHAPTER TWO ELEMENTS
    ========================================================= */

    const albumBook =
        document.getElementById("albumBook");

    const albumPages =
        albumBook
            ? Array.from(
                albumBook.querySelectorAll(".album-page")
            )
            : [];

    const previousAlbumPage =
        document.getElementById("previousAlbumPage");

    const nextAlbumPage =
        document.getElementById("nextAlbumPage");

    const albumDots =
        document.querySelectorAll(".album-dot");

    const albumCounter =
        document.getElementById("albumCounter");

    const chapterTwoEnding =
        document.getElementById("chapterTwoEnding");

    let currentAlbumPage = 0;

    let chapterTwoInitialized = false;

    let chapterTwoSongStarted = false;


    /* =========================================================
       20. CHAPTER TWO MUSIC
    ========================================================= */

    function startChapterTwoSong() {

        if (chapterTwoSongStarted) {
            return;
        }

        if (loveSong) {
            loveSong.pause();
        }

        if (!chapterTwoSong) {
            return;
        }

        chapterTwoSong.volume = 0.45;

        const playPromise =
            chapterTwoSong.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    chapterTwoSongStarted = true;

                })
                .catch(() => {

                    chapterTwoSongStarted = false;

                });

        } else {

            chapterTwoSongStarted = true;

        }

    }


    /* =========================================================
       21. ALBUM QUESTIONS
    ========================================================= */

    const answeredPages =
        new Array(albumPages.length).fill(false);


    function setupAlbumQuestions() {

        albumPages.forEach((page, pageIndex) => {

            const options =
                page.querySelectorAll(".mcq-option");

            const feedback =
                page.querySelector(".mcq-feedback");

            if (!options.length) {
                return;
            }

            const correctAnswer =
                (page.dataset.correct || "a")
                    .trim()
                    .toLowerCase();

            const correctAnswers =
                correctAnswer
                    .split(",")
                    .map(answer => answer.trim());


            options.forEach(option => {

                option.addEventListener("click", (event) => {

                    event.stopPropagation();

                    if (answeredPages[pageIndex]) {
                        return;
                    }

                    const answer =
                        (
                            option.dataset.answer ||
                            option.dataset.option ||
                            option.getAttribute("value") ||
                            ""
                        )
                            .trim()
                            .toLowerCase();

                    options.forEach(item => {

                        item.classList.remove(
                            "correct",
                            "wrong"
                        );

                    });


                    if (correctAnswers.includes(answer)) {

                        option.classList.add("correct");

                        answeredPages[pageIndex] = true;

                        if (feedback) {
                            feedback.textContent = "Correct ❤️";
                        }


                        if (
                            pageIndex ===
                            albumPages.length - 1
                        ) {

                            setTimeout(() => {
                                showChapterTwoEnding();
                            }, 800);

                        }

                    } else {

                        option.classList.add("wrong");

                        if (feedback) {

                            feedback.textContent =
                                "Not quite... try again ❤️";

                        }

                    }

                    updateAlbumControls();

                });

            });

        });

    }


    /* =========================================================
       22. UPDATE ALBUM PAGES
    ========================================================= */

    function updateAlbumPages() {

        if (!albumPages.length) {
            return;
        }

        albumPages.forEach((page, index) => {

            page.classList.remove("active");

            if (index === currentAlbumPage) {

                page.classList.remove("hidden-page");
                page.classList.add("active");

            } else {

                page.classList.add("hidden-page");

            }

        });


        albumDots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentAlbumPage
            );

        });


        if (albumCounter) {

            albumCounter.textContent =
                `PAGE ${String(currentAlbumPage + 1).padStart(2, "0")} / ${String(albumPages.length).padStart(2, "0")}`;

        }

        updateAlbumControls();

    }


    /* =========================================================
       23. ALBUM CONTROLS
    ========================================================= */

    function updateAlbumControls() {

        if (!albumPages.length) {
            return;
        }

        if (previousAlbumPage) {

            previousAlbumPage.disabled =
                currentAlbumPage === 0;

        }

        if (nextAlbumPage) {

            const currentPage =
                albumPages[currentAlbumPage];

            const hasQuestion =
                currentPage?.querySelector(".mcq-option");

            const isAnswered =
                answeredPages[currentAlbumPage];

            if (hasQuestion) {

                nextAlbumPage.disabled =
                    !isAnswered;

            } else {

                nextAlbumPage.disabled =
                    currentAlbumPage >=
                    albumPages.length - 1;

            }

        }

    }


    /* =========================================================
       24. NEXT ALBUM PAGE
    ========================================================= */

    function goToNextAlbumPage() {

        if (
            currentAlbumPage >=
            albumPages.length - 1
        ) {
            return;
        }

        const currentPage =
            albumPages[currentAlbumPage];

        const hasQuestion =
            currentPage?.querySelector(".mcq-option");

        if (
            hasQuestion &&
            !answeredPages[currentAlbumPage]
        ) {
            return;
        }

        currentAlbumPage++;

        updateAlbumPages();

    }


    /* =========================================================
       25. PREVIOUS ALBUM PAGE
    ========================================================= */

    function goToPreviousAlbumPage() {

        if (currentAlbumPage <= 0) {
            return;
        }

        currentAlbumPage--;

        updateAlbumPages();

    }


    previousAlbumPage?.addEventListener("click", (event) => {

        event.stopPropagation();
        goToPreviousAlbumPage();

    });


    nextAlbumPage?.addEventListener("click", (event) => {

        event.stopPropagation();
        goToNextAlbumPage();

    });


    /* =========================================================
       26. ALBUM DOTS
    ========================================================= */

    albumDots.forEach((dot, index) => {

        dot.addEventListener("click", (event) => {

            event.stopPropagation();

            if (
                index < 0 ||
                index >= albumPages.length
            ) {
                return;
            }

            if (index > currentAlbumPage) {

                const currentPage =
                    albumPages[currentAlbumPage];

                const hasQuestion =
                    currentPage?.querySelector(".mcq-option");

                if (
                    hasQuestion &&
                    !answeredPages[currentAlbumPage]
                ) {
                    return;
                }

            }

            currentAlbumPage = index;

            updateAlbumPages();

        });

    });


    /* =========================================================
       27. INITIALIZE CHAPTER TWO
    ========================================================= */

    function initializeChapterTwo() {

        if (chapterTwoInitialized) {
            return;
        }

        chapterTwoInitialized = true;

        currentAlbumPage = 0;

        setupAlbumQuestions();

        updateAlbumPages();

        if (chapterTwoEnding) {
            chapterTwoEnding.classList.remove("active");
        }

    }


    /* =========================================================
       28. OPEN CHAPTER TWO
    ========================================================= */

  function openChapterTwo() {
    if (!chapterTwoSection) {
        console.error("Chapter Two section not found.");
        return;
    }

    initializeChapterTwo();
    startChapterTwoSong();

    chapterTwoSection.classList.add("chapter-two-open");

    chapterTwoSection.style.display = "block";

    chapterTwoSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


    openChapterTwoButton?.addEventListener(
        "click",
        (event) => {

            event.preventDefault();
            event.stopPropagation();

            openChapterTwo();

        }
    );


    /* =========================================================
       29. START YEAR TWO
    ========================================================= */
startYearTwoButton?.addEventListener(
    "click",
    (event) => {

        event.preventDefault();
        event.stopPropagation();

        initializeChapterTwo();

        startChapterTwoSong();

        const album =
            document.getElementById("yearTwoAlbum");

        if (album) {

            album.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }
);


    /* =========================================================
       30. ALBUM KEYBOARD CONTROLS
    ========================================================= */

    document.addEventListener("keydown", (event) => {

        if (!chapterTwoSection) {
            return;
        }

        const rect =
            chapterTwoSection.getBoundingClientRect();

        const visible =
            rect.top < window.innerHeight &&
            rect.bottom > 0;

        if (!visible) {
            return;
        }

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }

        if (event.key === "ArrowRight") {
            goToNextAlbumPage();
        }

        if (event.key === "ArrowLeft") {
            goToPreviousAlbumPage();
        }

    });


    /* =========================================================
       31. CHAPTER TWO SONG LOOP
    ========================================================= */

    if (chapterTwoSong) {

        chapterTwoSong.addEventListener("ended", () => {

            chapterTwoSong.currentTime = 0;

            chapterTwoSong.play().catch(() => {});

        });

    }


    /* =========================================================
       32. CHAPTER ONE SONG LOOP
    ========================================================= */

    if (loveSong) {

        loveSong.addEventListener("ended", () => {

            if (!chapterTwoSongStarted) {

                loveSong.currentTime = 0;

                loveSong.play().catch(() => {});

            }

        });

    }


    /* =========================================================
       33. INITIAL ALBUM STATE
    ========================================================= */

    if (albumPages.length) {

        albumPages.forEach((page, index) => {

            page.classList.remove("active");

            if (index === 0) {

                page.classList.add("active");

                page.classList.remove("hidden-page");

            } else {

                page.classList.add("hidden-page");

            }

        });

    }


    if (chapterTwoEnding) {

        chapterTwoEnding.classList.remove("active");

    }


    console.log(
        "❤️ Our Little World — Chapter 1 & 2 loaded."
    );


    /* =========================================================
       CHAPTER TWO ENDING
    ========================================================= */

    window.showChapterTwoEnding = function () {

        const album =
            document.getElementById("albumBook");

        const controls =
            document.querySelector(
                "#chapterTwo .album-controls"
            );

        const ending =
            document.getElementById("chapterTwoEnding");


        if (album) {
            album.style.display = "none";
        }

        if (controls) {
            controls.style.display = "none";
        }

        if (ending) {

            ending.classList.add("show");

            requestAnimationFrame(() => {

                chapterTwoSection.scrollTop =
                    ending.offsetTop;

            });

        }

    };


    /* =========================================================
       CHAPTER THREE
       COMPLETE FINAL INTERACTION
    ========================================================= */

    const chapterThree =
        document.getElementById("chapterThree");

    const chapterThreeIntro =
        document.getElementById("chapterThreeIntro");

    const chapterThreeSong =
        document.getElementById("chapterThreeSong");

    const openChapterThreeButton =
        document.getElementById("openChapterThree");

    const chapterThreeTeaser =
        document.querySelector(
            "#chapterTwoEnding .chapter-three-teaser"
        );

    const foreverQuestion =
        document.getElementById("foreverQuestion");

    const foreverYes =
        document.getElementById("foreverYes");

    const foreverNo =
        document.getElementById("foreverNo");

    const foreverCelebration =
        document.getElementById("foreverCelebration");


    if (chapterThree) {


        /* =====================================================
           CHAPTER THREE MUSIC
        ===================================================== */

        function startChapterThreeSong() {

            if (loveSong) {

                loveSong.pause();
                loveSong.currentTime = 0;

            }

            if (chapterTwoSong) {

                chapterTwoSong.pause();
                chapterTwoSong.currentTime = 0;

            }

            if (!chapterThreeSong) {
                return;
            }

            chapterThreeSong.volume = 0.45;

            chapterThreeSong.play().catch(() => {

                console.log(
                    "Chapter 3 music requires user interaction."
                );

            });

        }


        function stopChapterThreeSong() {

            if (!chapterThreeSong) {
                return;
            }

            chapterThreeSong.pause();
            chapterThreeSong.currentTime = 0;

        }


        /* =====================================================
           OPEN CHAPTER THREE
        ===================================================== */

        function openChapterThree() {

            /* Stop Chapter 2 music */

            if (chapterTwoSong) {

                chapterTwoSong.pause();
                chapterTwoSong.currentTime = 0;

            }


            /* Hide Chapter 2 */

            if (chapterTwoSection) {

                chapterTwoSection.style.display = "none";

                chapterTwoSection.classList.remove(
                    "chapter-two-open"
                );

            }


            /* Show Chapter 3 */

            chapterThree.style.display = "block";

            chapterThree.style.position = "fixed";
            chapterThree.style.inset = "0";
            chapterThree.style.zIndex = "10000";


            /*
               Add class for normal Chapter 3 styling.
            */

            chapterThree.classList.add(
                "chapter-three-open"
            );


            /*
               IMPORTANT FIX

               The CSS animation on .chapter-three-open
               uses transform.

               A transform on the scrolling Chapter 3
               container can make position: fixed
               celebration behave like it is attached
               to the intro.

               We therefore let the reveal animation finish,
               then permanently remove its transform/animation.
            */

            requestAnimationFrame(() => {

                setTimeout(() => {

                    chapterThree.style.animation = "none";
                    chapterThree.style.transform = "none";

                }, 1500);

            });


            /* Start Chapter 3 music */

            startChapterThreeSong();


            /* Always start at intro */

            chapterThree.scrollTop = 0;

            requestAnimationFrame(() => {
                chapterThree.scrollTop = 0;
            });


            /* Restart intro animation */

            if (chapterThreeIntro) {

                chapterThreeIntro.classList.remove(
                    "chapter-three-intro-active"
                );

                void chapterThreeIntro.offsetWidth;

                chapterThreeIntro.classList.add(
                    "chapter-three-intro-active"
                );

            }

        }


        /* =====================================================
           ENTER CHAPTER THREE BUTTON
        ===================================================== */

        openChapterThreeButton?.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                openChapterThree();

            }
        );


        /* =====================================================
           CHAPTER THREE TEASER
        ===================================================== */

        if (chapterThreeTeaser) {

            chapterThreeTeaser.style.cursor = "pointer";

            chapterThreeTeaser.setAttribute(
                "title",
                "Enter Chapter Three ❤️"
            );

            chapterThreeTeaser.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    openChapterThree();

                }
            );

        }


        /* =====================================================
           CHAPTER THREE MUSIC LOOP
        ===================================================== */

        if (chapterThreeSong) {

            chapterThreeSong.addEventListener(
                "ended",
                () => {

                    chapterThreeSong.currentTime = 0;

                    chapterThreeSong.play().catch(() => {});

                }
            );

        }


        /* =====================================================
           PREVIOUS CHAPTER
        ===================================================== */

      function goBackToChapterTwo() {

    if (foreverCelebration) {
        foreverCelebration.classList.remove("show");
    }

    stopChapterThreeSong();

    chapterThree.classList.remove("chapter-three-open");
    chapterThree.style.display = "none";
    chapterThree.style.position = "";
    chapterThree.style.inset = "";
    chapterThree.style.zIndex = "";
    chapterThree.style.animation = "";
    chapterThree.style.transform = "";

    if (!chapterTwoSection) return;

    chapterTwoSection.style.display = "block";
    chapterTwoSection.classList.add("chapter-two-open");
    chapterTwoSection.style.position = "fixed";
    chapterTwoSection.style.inset = "0";
    chapterTwoSection.style.zIndex = "9999";

    if (chapterTwoSong) {
        chapterTwoSong.volume = 0.45;
        chapterTwoSong.play().catch(() => {
            console.log("Chapter 2 music requires user interaction.");
        });
    }

    const album = document.getElementById("albumBook");
    const controls = document.querySelector("#chapterTwo .album-controls");

    if (album) album.style.display = "none";
    if (controls) controls.style.display = "none";

    if (chapterTwoEnding) {
        chapterTwoEnding.classList.add("show");

        requestAnimationFrame(() => {
            chapterTwoSection.scrollTop =
                chapterTwoEnding.offsetTop;
        });
    }
}

        /* =====================================================
           FIVE MEMORY GATES
        ===================================================== */

        const memoryGates =
            document.querySelectorAll(
                "#chapterThree .memory-gate"
            );


        memoryGates.forEach((gate, index) => {

            const door =
                gate.querySelector(".gate-door");

            const memory =
                gate.querySelector(".gate-memory");

            const image =
                gate.querySelector(".gate-memory img");


            if (!door || !memory) {
                return;
            }


            gate.classList.remove("open");

            memory.classList.remove(
                "memory-visible"
            );


            door.setAttribute(
                "role",
                "button"
            );

            door.setAttribute(
                "tabindex",
                "0"
            );


            function openGate() {

                if (gate.classList.contains("open")) {
                    return;
                }

                gate.classList.add("open");

                setTimeout(() => {

                    memory.classList.add(
                        "memory-visible"
                    );

                }, 600);


                if (
                    navigator.vibrate &&
                    index % 2 === 0
                ) {

                    navigator.vibrate(25);

                }

            }


            door.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    openGate();

                }
            );


            door.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openGate();

                    }

                }
            );


            if (image) {

                image.style.cursor = "zoom-in";

                image.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();
                        event.stopPropagation();

                        openChapterThreePhoto(
                            image.src,
                            image.alt
                        );

                    }
                );

            }

        });


        /* =====================================================
           CHAPTER THREE PHOTO LIGHTBOX
        ===================================================== */

        function createChapterThreePhotoLightbox() {

            let lightbox =
                document.getElementById(
                    "chapterThreePhotoLightbox"
                );


            if (lightbox) {
                return lightbox;
            }


            lightbox =
                document.createElement("div");

            lightbox.id =
                "chapterThreePhotoLightbox";

            lightbox.className =
                "chapter-three-photo-lightbox";


            lightbox.innerHTML = `
                <button
                    type="button"
                    class="chapter-three-photo-close"
                    aria-label="Close photo"
                >
                    ×
                </button>

                <div class="chapter-three-photo-box">

                    <img
                        class="chapter-three-lightbox-image"
                        src=""
                        alt=""
                    >

                    <p
                        class="chapter-three-lightbox-caption"
                    ></p>

                </div>
            `;


            document.body.appendChild(lightbox);


            const closeButton =
                lightbox.querySelector(
                    ".chapter-three-photo-close"
                );


            closeButton?.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();
                    event.stopPropagation();

                    lightbox.classList.remove(
                        "active"
                    );

                }
            );


            lightbox.addEventListener(
                "click",
                (event) => {

                    if (event.target === lightbox) {

                        lightbox.classList.remove(
                            "active"
                        );

                    }

                }
            );


            return lightbox;

        }


        function openChapterThreePhoto(src, alt) {

            const lightbox =
                createChapterThreePhotoLightbox();


            const image =
                lightbox.querySelector(
                    ".chapter-three-lightbox-image"
                );


            const caption =
                lightbox.querySelector(
                    ".chapter-three-lightbox-caption"
                );


            if (image) {

                image.src = src;

                image.alt =
                    alt || "Our memory";

            }


            if (caption) {

                caption.textContent =
                    alt || "Our memory ❤️";

            }


            lightbox.classList.add(
                "active"
            );

        }


        /* =====================================================
           MAP
        ===================================================== */

        const mapCities =
            document.querySelectorAll(
                "#chapterThree .map-city"
            );


        mapCities.forEach(city => {

            const photo =
                city.querySelector(".city-photo");


            if (!photo) {
                return;
            }


            city.addEventListener(
                "mouseenter",
                () => {

                    city.classList.add(
                        "city-hover"
                    );

                }
            );


            city.addEventListener(
                "mouseleave",
                () => {

                    city.classList.remove(
                        "city-hover"
                    );

                }
            );


            city.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();


                    mapCities.forEach(otherCity => {

                        if (otherCity !== city) {

                            otherCity.classList.remove(
                                "city-hover"
                            );

                        }

                    });


                    city.classList.toggle(
                        "city-hover"
                    );

                }
            );

        });


        /* =====================================================
           REUNION OBSERVER
        ===================================================== */

        const reunionSection =
            document.getElementById("reunion");


        if (reunionSection) {

            const reunionObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                reunionSection.classList.add(
                                    "reunion-visible"
                                );

                            }

                        });

                    },
                    {
                        root: chapterThree,
                        threshold: 0.25
                    }
                );


            reunionObserver.observe(
                reunionSection
            );

        }


        /* =====================================================
           FOREVER NOTE OBSERVER
        ===================================================== */

        const foreverNoteSection =
            document.getElementById(
                "foreverNote"
            );


        if (foreverNoteSection) {

            const foreverObserver =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                foreverNoteSection.classList.add(
                                    "forever-note-visible"
                                );

                            }

                        });

                    },
                    {
                        root: chapterThree,
                        threshold: 0.2
                    }
                );


            foreverObserver.observe(
                foreverNoteSection
            );

        }


        /* =====================================================
           NO BUTTON
        ===================================================== */

        if (foreverNo && foreverQuestion) {

            function moveNoButton() {

                const containerRect =
                    foreverQuestion.getBoundingClientRect();

                const buttonRect =
                    foreverNo.getBoundingClientRect();

                const padding = 24;


                const maxX =
                    Math.max(
                        padding,
                        containerRect.width -
                        buttonRect.width -
                        padding
                    );


                const maxY =
                    Math.max(
                        padding,
                        containerRect.height -
                        buttonRect.height -
                        padding
                    );


                const randomX =
                    padding +
                    Math.random() *
                    Math.max(
                        1,
                        maxX - padding
                    );


                const randomY =
                    padding +
                    Math.random() *
                    Math.max(
                        1,
                        maxY - padding
                    );


                foreverNo.style.position =
                    "absolute";

                foreverNo.style.left =
                    `${randomX}px`;

                foreverNo.style.top =
                    `${randomY}px`;


                foreverNo.classList.add(
                    "no-button-running"
                );


                setTimeout(() => {

                    foreverNo.classList.remove(
                        "no-button-running"
                    );

                }, 400);

            }


            foreverNo.addEventListener(
                "mouseenter",
                moveNoButton
            );


            foreverNo.addEventListener(
                "pointerdown",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    moveNoButton();

                }
            );


            foreverNo.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    moveNoButton();

                }
            );

        }


        /* =====================================================
           CELEBRATION
           FINAL FIX
        ===================================================== */

        if (foreverYes) {

            foreverYes.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();


                    /*
                       Save the exact Chapter 3 scroll
                       position BEFORE showing celebration.
                    */

                    const savedScroll =
                        chapterThree.scrollTop;


                    /*
                       Disable YES so it cannot be
                       clicked repeatedly.
                    */

                    foreverYes.disabled = true;


                    /*
                       Hide NO.
                    */

                    if (foreverNo) {

                        foreverNo.style.display =
                            "none";

                    }


                    /*
                       Generate effects.
                    */

                    createCelebrationHearts();
                    createConfetti();


                    /*
                       IMPORTANT:

                       We do NOT:
                       - scrollIntoView()
                       - change Chapter 3 scrollTop
                       - move celebration to body
                       - reopen Chapter 3
                       - change sections

                       Celebration simply appears.
                    */

                    if (foreverCelebration) {

                        foreverCelebration.classList.add(
                            "show"
                        );

                        foreverCelebration.style.zIndex =
                            "20000";

                    }


                    /*
                       Protect the exact current
                       Chapter 3 position.
                    */

                    requestAnimationFrame(() => {

                        chapterThree.scrollTop =
                            savedScroll;

                    });

                }
            );

        }


        /* =====================================================
           CELEBRATION HEARTS
        ===================================================== */

        function createCelebrationHearts() {

            if (!foreverCelebration) {
                return;
            }


            foreverCelebration
                .querySelectorAll(
                    ".celebration-heart"
                )
                .forEach(
                    heart => heart.remove()
                );


            const heartSymbols = [
                "❤️",
                "💗",
                "💕",
                "💖",
                "💘",
                "💝",
                "🧿",
                "💞",
                "💓"
            ];


            for (let i = 0; i < 32; i++) {

                const heart =
                    document.createElement("span");


                heart.className =
                    "celebration-heart";


                heart.textContent =
                    heartSymbols[
                        Math.floor(
                            Math.random() *
                            heartSymbols.length
                        )
                    ];


                heart.style.left =
                    `${Math.random() * 100}%`;


                heart.style.animationDelay =
                    `${Math.random() * 2}s`;


                heart.style.animationDuration =
                    `${3 + Math.random() * 3}s`;


                foreverCelebration.appendChild(
                    heart
                );


                setTimeout(() => {

                    heart.remove();

                }, 7000);

            }

        }


        /* =====================================================
           CONFETTI
        ===================================================== */

        function createConfetti() {

            if (!foreverCelebration) {
                return;
            }


            foreverCelebration
                .querySelectorAll(
                    ".celebration-confetti"
                )
                .forEach(
                    piece => piece.remove()
                );


            const symbols = [
                "❤️",
                "💗",
                "✨",
                "💕",
                "💖",
                "🧿",
                "⭐",
                "💞"
            ];


            for (let i = 0; i < 55; i++) {

                const piece =
                    document.createElement("span");


                piece.className =
                    "celebration-confetti";


                piece.textContent =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                piece.style.left =
                    `${Math.random() * 100}%`;


                piece.style.animationDelay =
                    `${Math.random() * 1.5}s`;


                piece.style.animationDuration =
                    `${2.5 + Math.random() * 2.5}s`;


                foreverCelebration.appendChild(
                    piece
                );


                setTimeout(() => {

                    piece.remove();

                }, 6000);

            }

        }


        /* =====================================================
           CHAPTER THREE ESCAPE
        ===================================================== */

        document.addEventListener(
            "keydown",
            event => {

                if (event.key !== "Escape") {
                    return;
                }


                const lightbox =
                    document.getElementById(
                        "chapterThreePhotoLightbox"
                    );


                if (lightbox) {

                    lightbox.classList.remove(
                        "active"
                    );

                }


                if (
                    foreverCelebration?.classList.contains(
                        "show"
                    )
                ) {

                    foreverCelebration.classList.remove(
                        "show"
                    );


                    if (foreverYes) {

                        foreverYes.disabled =
                            false;

                    }


                    if (foreverNo) {

                        foreverNo.style.display =
                            "";

                    }

                }

            }
        );


        /* =====================================================
           INITIAL CHAPTER THREE STATE
        ===================================================== */

        if (
            !chapterThree.classList.contains(
                "chapter-three-open"
            )
        ) {

            chapterThree.style.display =
                "none";

        }


        if (foreverCelebration) {

            foreverCelebration.classList.remove(
                "show"
            );

        }


        console.log(
            "❤️ Chapter Three — final interaction loaded."
        );

        console.log(
            "Chapter Three:",
            !!chapterThree
        );

        console.log(
            "Chapter Three Song:",
            !!chapterThreeSong
        );

        console.log(
            "Memory Gates:",
            memoryGates.length
        );

        console.log(
            "Forever Question:",
            !!foreverQuestion
        );

    }

});