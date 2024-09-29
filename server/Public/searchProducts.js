const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", async function () {

    const searchValue = this.value.trim();
    const content = document.getElementById("content");
    const searchResults = document.getElementById("search-results");

    if (searchValue === "") {
        content.style.display = "flex"; // הצגת התוכן הקודם
        searchResults.innerHTML = "";    // מחיקת תוצאות החיפוש
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3000/products/search-products/${searchValue}`);

        if (response.status === 202) {
            searchResults.innerHTML = "<p> לא נמצאו מוצרים התואמים לחיפוש</p>";
            content.style.display = "flex";
        }

        if (response.status === 200) {
            const products = response.data.products;

            if (products.length > 0) {
                searchResults.innerHTML = products.map(product => `
                    <div class="gallery">
                        <a href="${product.img.url}">
                            <img src="${product.img.url}" alt="${product.name}">
                        </a>
                        <div class="desc">
                            ${product.categoryname} - ${product.name}
                            <a href="detailsp.html" class="aaa" onclick="change(${product.serial})">
                                <b>פרטי רכישה</b>
                            </a>
                        </div>
                    </div>
                `).join('');

                content.style.display = "none";
            }
        }
    } catch (error) {
        if (error.response.status === 500)
            console.error("משהו השתבש, נסו שוב")

        console.error(error);

        searchResults.innerHTML = "";
        content.style.display = "flex";
    }
})