// Sample data for APKs and Movies
const featuredAPKs = [
    {
        id: 1,
        name: "Spotify Premium",
        version: "8.8.96.364",
        features: "Unlocked Premium, No Ads, Extreme Quality",
        downloads: "1.2M",
        image: "assets/images/spotify.jpg",
        downloadLink: "#"
    },
    {
        id: 2,
        name: "YouTube Premium",
        version: "17.03.38",
        features: "Ad-Free, Background Play, Premium Features",
        downloads: "2.5M",
        image: "assets/images/youtube.jpg",
        downloadLink: "#"
    },
    {
        id: 3,
        name: "WhatsApp Plus",
        version: "17.50",
        features: "Extra Themes, Hide Online Status, Increased Limits",
        downloads: "850K",
        image: "assets/images/whatsapp.jpg",
        downloadLink: "#"
    }
];

const featuredMovies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        year: "2019",
        quality: "1080p",
        size: "2.4GB",
        category: "hollywood",
        image: "https://i1.sndcdn.com/artworks-maXjToFRtH7qL5nK-zBs8Eg-t500x500.jpg",
        downloadLink: "#"
    },
    {
        id: 2,
        title: "Dune",
        year: "2021",
        quality: "720p",
        size: "1.8GB",
        category: "hollywood",
        image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        downloadLink: "#"
    },
    {
        id: 3,
        title: "RRR",
        year: "2022",
        quality: "1080p",
        size: "2.7GB",
        category: "bollywood",
        image: "assets/images/rrr.jpg",
        downloadLink: "#"
    }
];

const allAPKs = [
    ...featuredAPKs,
    {
        id: 4,
        name: "TikTok Premium",
        version: "23.7.3",
        features: "No Watermark, No Ads, Region Unlocked",
        downloads: "1.8M",
        image: "assets/images/tiktok.jpg",
        downloadLink: "#"
    },
    {
        id: 5,
        name: "Instagram Plus",
        version: "210.0.0.30.119",
        features: "Download Media, Hide Stories, No Ads",
        downloads: "1.1M",
        image: "assets/images/instagram.jpg",
        downloadLink: "#"
    },
    {
        id: 6,
        name: "Netflix Mod",
        version: "8.4.0",
        features: "Unlocked Premium, 4K Quality, No Geo-Restrictions",
        downloads: "950K",
        image: "assets/images/netflix.jpg",
        downloadLink: "#"
    }
];

const allMovies = [
    ...featuredMovies,
    {
        id: 4,
        title: "The Batman",
        year: "2022",
        quality: "1080p",
        size: "2.5GB",
        category: "hollywood",
        image: "assets/images/batman.jpg",
        downloadLink: "#"
    },
    {
        id: 5,
        title: "KGF: Chapter 2",
        year: "2022",
        quality: "720p",
        size: "1.9GB",
        category: "bollywood",
        image: "assets/images/kgf2.jpg",
        downloadLink: "#"
    },
    {
        id: 6,
        title: "Demon Slayer: Mugen Train",
        year: "2020",
        quality: "1080p",
        size: "2.1GB",
        category: "anime",
        image: "assets/images/demonslayer.jpg",
        downloadLink: "#"
    },
    {
        id: 7,
        title: "Stranger Things S4",
        year: "2022",
        quality: "1080p",
        size: "3.2GB",
        category: "tv-series",
        image: "assets/images/strangerthings.jpg",
        downloadLink: "#"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load featured APKs on homepage
    if (document.getElementById('featured-apks')) {
        loadFeaturedAPKs();
    }
    
    // Load featured movies on homepage
    if (document.getElementById('featured-movies')) {
        loadFeaturedMovies();
    }
    
    // Load all APKs on mod-apk page
    if (document.getElementById('apk-list')) {
        loadAllAPKs();
    }
    
    // Load all movies on movie page
    if (document.getElementById('movie-list')) {
        loadAllMovies();
    }
    
    // Setup search functionality for APKs
    if (document.getElementById('apk-search')) {
        setupAPKSearch();
    }
    
    // Setup search functionality for movies
    if (document.getElementById('movie-search')) {
        setupMovieSearch();
    }
    
    // Setup category filtering for movies
    if (document.querySelector('.category-tabs')) {
        setupMovieCategories();
    }
});

// Load Featured APKs
function loadFeaturedAPKs() {
    const container = document.getElementById('featured-apks');
    container.innerHTML = '';
    
    featuredAPKs.forEach(apk => {
        const card = createAPKCard(apk);
        container.appendChild(card);
    });
}

// Load Featured Movies
function loadFeaturedMovies() {
    const container = document.getElementById('featured-movies');
    container.innerHTML = '';
    
    featuredMovies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Load All APKs
function loadAllAPKs() {
    const container = document.getElementById('apk-list');
    container.innerHTML = '';
    
    allAPKs.forEach(apk => {
        const card = createAPKCard(apk);
        container.appendChild(card);
    });
}

// Load All Movies
function loadAllMovies() {
    const container = document.getElementById('movie-list');
    container.innerHTML = '';
    
    allMovies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Create APK Card Element
function createAPKCard(apk) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${apk.image}" alt="${apk.name}" loading="lazy">
        <div class="card-content">
            <h3>${apk.name}</h3>
            <p><strong>Version:</strong> ${apk.version}</p>
            <p><strong>Features:</strong> ${apk.features}</p>
            <p><strong>Downloads:</strong> ${apk.downloads}</p>
            <a href="${apk.downloadLink}" class="download-btn">
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    `;
    
    return card;
}

// Create Movie Card Element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="card-content">
            <h3>${movie.title} (${movie.year})</h3>
            <p><strong>Quality:</strong> ${movie.quality}</p>
            <p><strong>Size:</strong> ${movie.size}</p>
            <p><strong>Category:</strong> ${movie.category.charAt(0).toUpperCase() + movie.category.slice(1)}</p>
            <a href="${movie.downloadLink}" class="download-btn">
                <i class="fas fa-download"></i> Download
            </a>
        </div>
    `;
    
    return card;
}

// Setup APK Search
function setupAPKSearch() {
    const searchInput = document.getElementById('apk-search');
    const searchButton = searchInput.nextElementSibling;
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const container = document.getElementById('apk-list');
        container.innerHTML = '';
        
        if (!searchTerm) {
            loadAllAPKs();
            return;
        }
        
        const filteredAPKs = allAPKs.filter(apk => 
            apk.name.toLowerCase().includes(searchTerm) || 
            apk.features.toLowerCase().includes(searchTerm)
        );
        
        if (filteredAPKs.length === 0) {
            container.innerHTML = '<p class="no-results">No APKs found matching your search.</p>';
            return;
        }
        
        filteredAPKs.forEach(apk => {
            const card = createAPKCard(apk);
            container.appendChild(card);
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Setup Movie Search
function setupMovieSearch() {
    const searchInput = document.getElementById('movie-search');
    const searchButton = searchInput.nextElementSibling;
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const container = document.getElementById('movie-list');
        container.innerHTML = '';
        
        if (!searchTerm) {
            loadAllMovies();
            return;
        }
        
        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) || 
            movie.category.toLowerCase().includes(searchTerm)
        );
        
        if (filteredMovies.length === 0) {
            container.innerHTML = '<p class="no-results">No movies found matching your search.</p>';
            return;
        }
        
        filteredMovies.forEach(movie => {
            const card = createMovieCard(movie);
            container.appendChild(card);
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Setup Movie Categories
function setupMovieCategories() {
    const categoryButtons = document.querySelectorAll('.category-tabs button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.dataset.category;
            
            // Filter movies
            filterMoviesByCategory(category);
        });
    });
}

// Filter Movies by Category
function filterMoviesByCategory(category) {
    const container = document.getElementById('movie-list');
    container.innerHTML = '';
    
    if (category === 'all') {
        loadAllMovies();
        return;
    }
    
    const filteredMovies = allMovies.filter(movie => 
        movie.category === category
    );
    
    if (filteredMovies.length === 0) {
        container.innerHTML = '<p class="no-results">No movies found in this category.</p>';
        return;
    }
    
    filteredMovies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}
