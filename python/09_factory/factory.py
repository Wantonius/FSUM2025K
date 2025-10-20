class IConverter():
    def convert(self,amount,currency):
        pass
        
class DollarConverter(IConverter):
    def convert(self,amount,currency):
        if currency == "euro":
            return amount*0.86
        if currency == "yen":
            return amount*150.81
        return amount
        
class EuroConverter(IConverter):
    def convert(self,amount,currency):
        if currency == "dollar":
            return amount*1.17
        if currency == "yen":
            return amount*175.80
        return amount
        
class YenConverter(IConverter):
    def convert(self,amount,currency):
        if currency == "euro":
            return amount*0.0057
        if currency == "dollar":
            return amount*0.0066
        return amount
        
def Factory(currency = "dollar"):
    currencyConverters= {
        "dollar":DollarConverter,
        "euro":EuroConverter,
        "yen":YenConverter
    }
    
    return currencyConverters[currency]()
    
def main():
    
    converters = []
    converters.append(Factory("dollar"))
    converters.append(Factory("euro"))
    converters.append(Factory("yen"))
    
    for c in converters:
        print("--------------------")
        print("In dollars:",str(c.convert(100,"dollar")))
        print("In euros:",str(c.convert(100,"euro")))
        print("In yens:",str(c.convert(100,"yen")))
        
        
if __name__ == "__main__":
    main()