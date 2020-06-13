var adsContent = ['AD', '<iframe title=\"Advertisement\" width=\"450\" height=\"450\" src=\"https://Axialflow.github.io/"></iframe>'];

function showAD(linkto) {
    var content = '<div style=\"background-color: #151515;display: flex;align-items: center;justify-content: center;width: 100%;height: 100%;\">' + adsContent[1] + '<a href=\"' + linkto + '\" style=\"position: absolute;bottom: 10px;color: #e5e5e5;font-size: 30px;\">GO!</a></div>';
    document.write(content);
}