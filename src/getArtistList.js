const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function getHtml() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://charts.youtube.com/charts/TopArtists/kr?hl=ko');
        await page.waitForSelector('.chart-table');
        const html = await page.content();
        await browser.close();
        return html;
    } catch(error) {
        console.error(error);
        return null;
    }
}

async function getArtistList() {
    try {
        const html = await getHtml();
        if (!html) return;

        const artistList = [];
        const $ = cheerio.load(html);

        $(".chart-table-row").each((idx, element) => {
            let rank_change = '-';

            switch($(element).find("path.style-scope").attr('d')) {
                case 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z':
                    rank_change = '-';
                    break;
                case 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z':
                    rank_change = 'UP';
                    break;
                case 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z':
                    rank_change = 'DOWN';
                    break;
            }

            artistList.push({
                rank: idx + 1,
                rank_change,
                artist: $(element).find(".ytmc-ellipsis-text-container span.ytmc-ellipsis-text").text().replace(/\s/g, ""),
                duration: $(element).find(".chart-period-cell .chart-period span.ytmc-chart-table").text().replace(/\s/g, ""),
                views: $(element).find(".views-cell .views span.ytmc-chart-table").text().replace(/\s/g, ""),
            });
        });

        return artistList;
    } catch(error) {
        console.error(error);
    }
}

module.exports = (getArtistList);