// Event Configuration
const eventConfig = {
    date: 'Sabtu, 15 Juni 2024',
    time: 'Pukul 18:00 - 22:00',
    location: 'Gedung Serbaguna, Jalan Merdeka No. 123',
    city: 'Jakarta, Indonesia',
    host: 'Nama Tuan Rumah',
    description: 'Kami dengan senang hati mengundang Anda untuk hadir pada acara istimewa kami. Mari bersama-sama merayakan momen ini dengan penuh kegembiraan dan kebersamaan.'
};

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    loadEventDetails();
    loadGuestList();
    setupFormListener();
});

// Load Event Details
function loadEventDetails() {
    document.getElementById('eventDate').textContent = eventConfig.date;
    document.getElementById('eventTime').textContent = eventConfig.time;
    document.getElementById('eventLocation').textContent = eventConfig.location;
    document.getElementById('eventCity').textContent = eventConfig.city;
    document.getElementById('hostName').textContent = eventConfig.host;
    document.getElementById('eventDescription').textContent = eventConfig.description;
}

// Setup Form Listener
function setupFormListener() {
    const form = document.getElementById('rsvpForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitRSVP();
    });
}

// Submit RSVP
function submitRSVP() {
    const guestName = document.getElementById('guestName').value.trim();
    const guestEmail = document.getElementById('guestEmail').value.trim();
    const guestPhone = document.getElementById('guestPhone').value.trim();
    const attendance = document.getElementById('attendance').value;
    const guests = parseInt(document.getElementById('guests').value) || 0;
    const dietary = document.getElementById('dietary').value.trim();

    // Validation
    if (!guestName || !guestEmail || !attendance) {
        alert('Mohon lengkapi semua field yang diperlukan (*)!');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestEmail)) {
        alert('Mohon masukkan email yang valid!');
        return;
    }

    // Create guest object
    const guest = {
        id: Date.now(),
        name: guestName,
        email: guestEmail,
        phone: guestPhone,
        attendance: attendance,
        additionalGuests: guests,
        dietary: dietary,
        timestamp: new Date().toLocaleString('id-ID')
    };

    // Save to localStorage
    let guests_list = JSON.parse(localStorage.getItem('guests')) || [];
    guests_list.push(guest);
    localStorage.setItem('guests', JSON.stringify(guests_list));

    // Show success message
    showSuccessMessage();

    // Reset form
    document.getElementById('rsvpForm').reset();

    // Update guest list
    loadGuestList();
}

// Show Success Message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000);
}

// Load Guest List
function loadGuestList() {
    const guests_data = JSON.parse(localStorage.getItem('guests')) || [];
    const guestList = document.getElementById('guestList');
    const totalGuests = document.getElementById('totalGuests');
    const attendingGuests = document.getElementById('attendingGuests');
    const notAttendingGuests = document.getElementById('notAttendingGuests');

    // Calculate stats
    let attending = 0;
    let notAttending = 0;
    let totalCount = 0;

    guests_data.forEach(guest => {
        if (guest.attendance === 'hadir') attending++;
        if (guest.attendance === 'tidak-hadir') notAttending++;
        totalCount += guest.additionalGuests || 0;
    });

    totalCount += guests_data.length;

    // Update stats
    totalGuests.textContent = totalCount;
    attendingGuests.textContent = attending;
    notAttendingGuests.textContent = notAttending;

    // Display guest list
    if (guests_data.length === 0) {
        guestList.innerHTML = '<p class="placeholder">Belum ada tamu yang mengkonfirmasi</p>';
        return;
    }

    guestList.innerHTML = '';
    guests_data.forEach(guest => {
        const guestElement = createGuestElement(guest);
        guestList.appendChild(guestElement);
    });
}

// Create Guest Element
function createGuestElement(guest) {
    const div = document.createElement('div');
    div.className = 'guest-item';

    const statusClass = guest.attendance === 'hadir' ? 'attending' : 
                       guest.attendance === 'tidak-hadir' ? 'not-attending' : 'maybe';
    const statusText = guest.attendance === 'hadir' ? 'Akan Hadir' : 
                      guest.attendance === 'tidak-hadir' ? 'Tidak Hadir' : 'Mungkin Hadir';

    let guestInfo = `<div class="guest-info">
        <h3>${guest.name}</h3>
        <p>${guest.email}</p>`;
    
    if (guest.phone) {
        guestInfo += `<p>${guest.phone}</p>`;
    }
    
    if (guest.additionalGuests > 0) {
        guestInfo += `<p>+ ${guest.additionalGuests} tamu tambahan</p>`;
    }
    
    guestInfo += `</div>`;

    const statusBadge = `<span class="guest-status ${statusClass}">${statusText}</span>`;

    div.innerHTML = guestInfo + statusBadge;
    return div;
}

// Clear All Data (optional - for testing)
function clearAllData() {
    if (confirm('Yakin ingin menghapus semua data tamu?')) {
        localStorage.removeItem('guests');
        loadGuestList();
    }
}

// Export to CSV (optional - for admin)
function exportToCSV() {
    const guests_data = JSON.parse(localStorage.getItem('guests')) || [];
    
    if (guests_data.length === 0) {
        alert('Tidak ada data tamu untuk diexport');
        return;
    }

    let csv = 'Nama,Email,Telepon,Status Kehadiran,Tamu Tambahan,Preferensi Makanan\n';
    
    guests_data.forEach(guest => {
        csv += `"${guest.name}","${guest.email}","${guest.phone}","${guest.attendance}","${guest.additionalGuests}","${guest.dietary}"\n`;
    });

    // Create download link
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `daftar-tamu-${new Date().getTime()}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
