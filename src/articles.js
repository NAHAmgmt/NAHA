import articleImg1 from './images/articleImg1.jpg';

export const articles = () => {
    let mainBody = document.getElementById('article');
let articleSec = document.createElement('section');
articleSec.classList.add('card-row');

let firstArticle = document.createElement('article');
firstArticle.classList.add('card');

//Adding Img

let firstArticleImg = new Image();
firstArticleImg.src = articleImg1;
firstArticleImg.classList.add('zoom');
firstArticleImg.alt = "Man walking past a for rent sign";
firstArticle.append(firstArticleImg);

//Title section

let firstArticleTitle = document.createElement('h4');
firstArticleTitle.innerText = "Biden Wants to Offer More Housing Vouchers...";
firstArticle.append(firstArticleTitle);

//Info section 

let firstArticleInfo = document.createElement('ul');
let firstArticlePublisher = document.createElement('li');
firstArticlePublisher.innerText = "STATELINE ARTICLE";

let firstArticleDate = document.createElement('li');
firstArticleDate.innerText = "May 12, 2021";

let firstArticleAuthor = document.createElement('li');
firstArticleAuthor.innerHTML = '<i class="far fa-user">';

let firstArticleAuthorName = " by Kristian Hernandez";

let firstArticleBio = document.createElement('p');
firstArticleBio.innerText = "Over 2.2 million households receive subsidies through the Housing Choice Voucher Program.";

firstArticleAuthor.append(firstArticleAuthorName);
firstArticleInfo.append(firstArticlePublisher);
firstArticleInfo.append(firstArticleDate);
firstArticleInfo.append(firstArticleAuthor);
firstArticleInfo.append(firstArticleBio);

firstArticle.append(firstArticleInfo);
articleSec.append(firstArticle);

//Start of second article

let secondArticle = document.createElement('article');
secondArticle.classList.add('card');

//Adding Img

let secondArticleImg = new Image();
secondArticleImg.src = articleImg1;
secondArticleImg.classList.add('zoom');
secondArticleImg.alt = "Man walking past a for rent sign";
secondArticle.append(secondArticleImg);

//Title section

let secondArticleTitle = document.createElement('h4');
secondArticleTitle.innerText = "Biden Wants to Offer More Housing Vouchers...";
secondArticle.append(secondArticleTitle);

//Info section 

let secondArticleInfo = document.createElement('ul');
let secondArticlePublisher = document.createElement('li');
secondArticlePublisher.innerText = "STATELINE ARTICLE";

let secondArticleDate = document.createElement('li');
secondArticleDate.innerText = "May 12, 2021";

let secondArticleAuthor = document.createElement('li');
secondArticleAuthor.innerHTML = '<i class="far fa-user">';

let secondArticleAuthorName = " by Kristian Hernandez";

let secondArticleBio = document.createElement('p');
secondArticleBio.innerText = "Over 2.2 million households receive subsidies through the Housing Choice Voucher Program.";

secondArticleAuthor.append(secondArticleAuthorName);
secondArticleInfo.append(secondArticlePublisher);
secondArticleInfo.append(secondArticleDate);
secondArticleInfo.append(secondArticleAuthor);
secondArticleInfo.append(secondArticleBio);

secondArticle.append(secondArticleInfo);
articleSec.append(secondArticle);

//Start of thrid article

let thirdArticle = document.createElement('article');
thirdArticle.classList.add('card');

//Adding Img

let thirdArticleImg = new Image();
thirdArticleImg.src = articleImg1;
thirdArticleImg.classList.add('zoom');
thirdArticleImg.alt = "Man walking past a for rent sign";
thirdArticle.append(thirdArticleImg);

//Title section

let thirdArticleTitle = document.createElement('h4');
thirdArticleTitle.innerText = "Biden Wants to Offer More Housing Vouchers...";
thirdArticle.append(thirdArticleTitle);

//Info section 

let thirdArticleInfo = document.createElement('ul');
let thirdArticlePublisher = document.createElement('li');
thirdArticlePublisher.innerText = "STATELINE ARTICLE";

let thirdArticleDate = document.createElement('li');
thirdArticleDate.innerText = "May 12, 2021";

let thirdArticleAuthor = document.createElement('li');
thirdArticleAuthor.innerHTML = '<i class="far fa-user">';

let thirdArticleAuthorName = " by Kristian Hernandez";

let thirdArticleBio = document.createElement('p');
thirdArticleBio.innerText = "Over 2.2 million households receive subsidies through the Housing Choice Voucher Program.";

thirdArticleAuthor.append(thirdArticleAuthorName);
thirdArticleInfo.append(thirdArticlePublisher);
thirdArticleInfo.append(thirdArticleDate);
thirdArticleInfo.append(thirdArticleAuthor);
thirdArticleInfo.append(thirdArticleBio);

thirdArticle.append(thirdArticleInfo);
articleSec.append(thirdArticle);

mainBody.append(articleSec);
}
//find main section and add the article section