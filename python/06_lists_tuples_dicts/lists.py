def main():
    mylist = ["apple","banana","orange","apple"]
    print(mylist)
    
    mylist.append("lemon")
    print(mylist)
    mylist_copy = mylist.copy()
    mylist.extend(mylist_copy)
    print(mylist)
    myslice = mylist[3:]
    print(myslice)

    my_tuple = ("apple","banana","orange")
    print(my_tuple)
    
    mydict = {
        "brand":"Lenovo",
        "model":"Thinkpad",
        "screen":15.4
    }
    
    print(mydict)
    print(mydict["brand"])
    
    for key in mydict:
        print(key)

    for value in mydict.values():
        print(value)
    
    myset = {"apple","banana","orange",10,20,30}
    
    print(myset)
    myset.add(100)
    
    print(myset)
    
if __name__ == "__main__":
    main()