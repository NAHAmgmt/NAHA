import articleImg1 from './images/articleImg1.jpg';
import articleImg2 from './images/articleImg2.jpg';
import articleImg3 from './images/articleImg3.jpg';
import articleImg4 from './images/articleImg4.jpg';
import articleImg5 from './images/articleImg5.jpg';

export const articles = () => {
    // article template image,alt,link,title,publisher,date,author,bio
    let articlesArray = [];

    //add newest articles to the bottom
    let articleOne = newArticle(articleImg1, "car parked in from of rent sign", 'https://www.pewresearch.org/fact-tank/2022/01/18/a-growing-share-of-americans-say-affordable-housing-is-a-major-problem-where-they-live/',"A growing share of Americans say affordable housing is...","PEW RESEARCH ARTICLE","Jan 18, 2022"," by Katherine Schaeffer","49% of Americans say the availability of affordable housing in their local community is a major problem, up 10 points from early 2018.");
    articlesArray.unshift(articleOne);
    let articleTwo = newArticle(articleImg2, 'moving truck unloading at townhomes','https://theconversation.com/affordable-housing-in-the-us-is-increasingly-scarce-making-renters-ask-where-do-we-go-176778','Affordable housing in the US is increasingly scarce, making renters ask: Where do we go?','The Conversation','March 14, 2022','Celine-Marie Pascale','It’s getting much harder in the US to find an affordable home, even for people who work multiple jobs.')
    articlesArray.unshift(articleTwo);
    let articleThree = newArticle(articleImg3, 'A small family home','https://www.usatoday.com/story/money/2022/04/12/housing-shortage-middle-class-real-estate/7060824001/?gnt-cfr=1','Will the middle class survive a nationwide housing shortage?','USA TODAY','April 12, 2022','Terry Collins','The nation is estimated to be about 6 million housing units short of demand, a situation worsened by the supply pinch.');
    articlesArray.unshift(articleThree);
    let articleFour = newArticle(articleImg4, 'the pope cutting a ribbon infront of an apartment building', 'https://www.catholiccharitiesusa.org/story/catholic-charities-brooklyn-and-queens-dedicates-the-pope-francis-apartments-at-loreto-in-brooklyn-during-a-ceremonial-ribbon-cutting/','Catholic Charities of Brooklyn and Queens Breaks Ground on Loreto Apartments','Catholic Charities USA', 'April 29, 2022', 'Catholic Charities USA', 'Located in Brownsville, Brooklyn, the $48 million development provides 135 units of affordable apartments for low-income seniors with supportive services.');
    articlesArray.unshift(articleFour);
    let articleFive = newArticle(articleImg5,"Family in front of a house", 'https://www.usatoday.com/story/money/2022/05/02/first-time-home-buyers-housing-prices/9561910002/?gnt-cfr=1',' For first-time homebuyers, are starter homes becoming extinct?', 'USA TODAY','May 2, 2022','by Terry Collins', 'For first-time homebuyers, steep housing prices are making it hard to buy starter homes, and inflation and rising mortgage rates may make it worse.')
    articlesArray.unshift(articleFive);


let home = document.querySelector('#article')
let articleHtml = document.querySelector('#article-sec')
if (home) {
    let mainBody = document.getElementById('article');
    let sectionTag = document.createElement('section');
    for(let i=0;i<3;i++){
        console.log(articlesArray[i]);
        
        
        sectionTag.classList.add('card-row');

        let article = document.createElement('article');
        article.classList.add('card');

        let artImg = new Image();
        artImg.src = articlesArray[i].image;
        artImg.classList.add('zoom');
        artImg.alt = articlesArray[i].alt;
        article.append(artImg);

        let artLink = document.createElement('a');
        artLink.href = articlesArray[i].link;
        let artTitle = document.createElement('h4');
        artTitle.innerText = articlesArray[i].title;
        artLink.append(artTitle);
        article.append(artLink);

        let articleInfo = document.createElement('ul');
        let articlePublisher = document.createElement('li');
        articlePublisher.innerText = articlesArray[i].publisher;

        let articleDate = document.createElement('li');
        articleDate.innerText = articlesArray[i].date;

        let articleAuthor = document.createElement('li');
        articleAuthor.innerHTML = '<i class="far fa-user">';

        let authorName = articlesArray[i].author;

        
        let articleBio = document.createElement('p');
        articleBio.innerText = articlesArray[i].bio;

        articleAuthor.append(authorName);
        articleInfo.append(articlePublisher);
        articleInfo.append(articleDate);
        articleInfo.append(articleAuthor);
        articleInfo.append(articleBio);
        article.append(articleInfo);

        sectionTag.append(article)
    }
    mainBody.append(sectionTag);
} else if (articleHtml) {
    let mainBody = document.getElementById('article-sec');
    let sectionTag = document.createElement('section');
    for(let i=0;i<articlesArray.length;i++){
        console.log(articlesArray[i]);
        
        
        sectionTag.classList.add('card-row');

        let article = document.createElement('article');
        article.classList.add('card');

        let artImg = new Image();
        artImg.src = articlesArray[i].image;
        artImg.classList.add('zoom');
        artImg.alt = articlesArray[i].alt;
        article.append(artImg);

        let artLink = document.createElement('a');
        artLink.href = articlesArray[i].link;
        let artTitle = document.createElement('h4');
        artTitle.innerText = articlesArray[i].title;
        artLink.append(artTitle);
        article.append(artLink);

        let articleInfo = document.createElement('ul');
        let articlePublisher = document.createElement('li');
        articlePublisher.innerText = articlesArray[i].publisher;

        let articleDate = document.createElement('li');
        articleDate.innerText = articlesArray[i].date;

        let articleAuthor = document.createElement('li');
        articleAuthor.innerHTML = '<i class="far fa-user">';

        let authorName = articlesArray[i].author;

        
        let articleBio = document.createElement('p');
        articleBio.innerText = articlesArray[i].bio;

        articleAuthor.append(authorName);
        articleInfo.append(articlePublisher);
        articleInfo.append(articleDate);
        articleInfo.append(articleAuthor);
        articleInfo.append(articleBio);
        article.append(articleInfo);

        sectionTag.append(article)
    }
    mainBody.append(sectionTag);
}

}
//find main section and add the article section

function newArticle(image,alt,link,title,publisher,date,author,bio) {
    return {
        image,
        alt,
        link,
        title,
        publisher,
        date,
        author,
        bio
    };


}
