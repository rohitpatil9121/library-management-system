document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#bookForm').addEventListener('submit', handleAddBook);
    document.querySelector('#memberForm').addEventListener('submit', handleAddMember);
    document.querySelector('#borrowerForm').addEventListener('submit', handleAddBorrower);
});

function showAddBookForm() {
    document.getElementById('add-book-form').style.display = 'block';
    document.getElementById('add-member-form').style.display = 'none';
    document.getElementById('add-borrower-form').style.display = 'none';
}

function showAddMemberForm() {
    document.getElementById('add-book-form').style.display = 'none';
    document.getElementById('add-member-form').style.display = 'block';
    document.getElementById('add-borrower-form').style.display = 'none';
}

function showAddBorrowerForm() {
    document.getElementById('add-book-form').style.display = 'none';
    document.getElementById('add-member-form').style.display = 'none';
    document.getElementById('add-borrower-form').style.display = 'block';
}

function handleAddBook(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const author = document.getElementById('author').value;
    const cover = document.getElementById('cover').value;
    const total = document.getElementById('total').value;
    const price = document.getElementById('price').value;

    if (!title || !category || !author || !cover || !total || !price) {
        alert('Please fill in all fields.');
        return;
    }

    const table = document.querySelector('#books table tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${title}</td>
        <td>${category}</td>
        <td>${author}</td>
        <td><img src="${cover}" alt="Book Cover" width="50"></td>
        <td>${total}</td>
        <td>${total}</td>
        <td>${price}</td>
        <td>Available</td>
        <td>${Math.floor(Math.random() * 100000)}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>${new Date().toLocaleString()}</td>
    `;

    document.getElementById('bookForm').reset();
    document.getElementById('add-book-form').style.display = 'none';
}

function handleAddMember(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (!name || !id || !address || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    const table = document.querySelector('#members table tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${address}</td>
        <td>${phone}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>${new Date().toLocaleString()}</td>
    `;

    document.getElementById('memberForm').reset();
    document.getElementById('add-member-form').style.display = 'none';
}

function handleAddBorrower(event) {
    event.preventDefault();
    
    const memberName = document.getElementById('memberName').value;
    const note = document.getElementById('note').value;
    const book = document.getElementById('book').value;
    const borrowDate = document.getElementById('borrowDate').value;

    if (!memberName || !book || !borrowDate) {
        alert('Please fill in all required fields.');
        return;
    }

    const table = document.querySelector('#borrowers table tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${memberName}</td>
        <td>${note}</td>
        <td>${book}</td>
        <td>${borrowDate}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>${new Date().toLocaleString()}</td>
    `;

    document.getElementById('borrowerForm').reset();
    document.getElementById('add-borrower-form').style.display = 'none';
}