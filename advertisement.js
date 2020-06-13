var adsContent = ['AD', '<iframe title=\"Advertisement\" width=\"450\" height=\"450\" src=\"https://cysh-cc.github.io/"></iframe>'];

function showAD(linkto) {
    var content = '<div style=\"background-color: #151515;color: #e5e5e5;display: flex;align-items: center;justify-content: center;width: 100%;height: 100%;\"><p style=\"position: absolute;top: 12.5px;\">廣告</p>' + adsContent[1] + '<a href=\"' + linkto + '\" style=\"position: absolute;bottom: 25px;color: #e5e5e5;font-size: 30px;\">GO!</a></div>';
    document.write(content);
}