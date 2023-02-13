/**
 * author : Edilson Claudino da Silva
 * email  : edilsonclaudinosilva@gmail.com
 * Esta é uma Biblioteca que Gera um Cor RGBA atraves de Porcentagem
 * Created : 12-02-2023
 * Version :V.0
 * 
 * Releases:
 *  12-02-2023 18:09
 * 
 * @example 
 *   const Rgba = new RGBA()
 *   Rgba.setHeatMap(51.5)
 * 
 * @param   {Number} obrigatorio   Parametro obrigatório
 * @returns {String}               rgba
 */

function RGBA(){}
RGBA.prototype.getRgbaByPercentages=function(porcentagesValue){
    const rgbas=[
        {"to":0,"from":20,"rgba":"135,206,250"},
        {"to":20,"from":50,"rgba":"124,252,0"},
        {"to":50,"from":70,"rgba":"255,255,0"},
        {"to":70,"from":85,"rgba":"128,0,0"},
        {"to":85,"from":99,"rgba":"255,0,0"}
        
    ]
    const sizeRgbas = rgbas.length
    for(nextRgba=0;nextRgba < sizeRgbas;nextRgba++){
        if( porcentagesValue >=rgbas[nextRgba].to && porcentagesValue < rgbas[nextRgba].from) return rgbas[nextRgba]
    }
    return rgbas[0]
}



RGBA.prototype.decimalToCssTransparencyUnit=function(unit){
    if(unit < 7) return 0.07
    if(unit > 90) return 0.87
    return (unit / 100).toFixed(2)
}

RGBA.prototype.setHeatMap=function(porcentagesValue){
    const decimalrestOfDivisional = porcentagesValue % 100
    const rgb = this.getRgbaByPercentages(porcentagesValue).rgba.split(",")
    const transparency = this.decimalToCssTransparencyUnit(decimalrestOfDivisional)
    const rgba ="rgba(R,G,B,T)".replace("R",rgb[0]).replace("G",rgb[1]).replace("B",rgb[2]).replace("T",transparency)
    return rgba
}