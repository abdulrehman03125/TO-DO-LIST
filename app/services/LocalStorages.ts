import { LocalStorageKeys } from '../types/LocalStorageKeys';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserTypes } from '../types/UserType';

 class LocalStorage {
  // constructor(){}

      //singletons 
 private static _localStorage: LocalStorage;

    private constructor()
    {
        //...
    }

    public static getInstance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._localStorage || (this._localStorage = new this());
    }



     // LocalStorageKeys in storage function 
  setUser = async (value: LocalStorageKeys) => {
    try {
      await AsyncStorage.setItem(LocalStorageKeys.USER,JSON.stringify(UserTypes) );
    } catch (error) {}
  };


  getUser = async () => {
    try {

      const getuserinfo=  await AsyncStorage.getItem(LocalStorageKeys.USER)
        return getuserinfo != null ? JSON.parse(getuserinfo): "use solved ";
    } catch (error) {
        
    }
}
}

export const myClassInstance = LocalStorage.getInstance();
