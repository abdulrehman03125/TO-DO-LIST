import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export function useNetwork() {
  const [isOnline, setIsOnline] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(!!(state.isConnected && state.isInternetReachable));
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      console.log("Is Internet reachable?", state.isInternetReachable);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return isOnline;
}

// import { NetInfoStateType } from "@react-native-community/netinfo";
// import { useEffect, useState } from "react";

// export function useNetwork() {

//     const [isOnline, setIsOnline] = useState<boolean>(false);
//   useEffect(
//     () => {
//       // outer arrow function
//       const handleNetworkChange = () => {
//         // initial inner function
//         // resume here
//         // inner arrow function

// /////          ///
//         const unsubscribe = NetInfo.addEventListener((state)=> {
//             setIsOnline(!! (state.isConnected && state.isInternetReachable ));
//             console.log("Connection type", state.type);
//             console.log("Is connected?", state.isConnected);
//             console.log("Is Internet reachable?", state.isInternetReachable);
//         });

//         /// ///
//         const isOnline = navigator.onLine;

//         console.log(

//           `Network status changed: ${isOnline ? "Online" : "Offline"}`
//         );
//       };
//     //   window.addEventListener("online", handleNetworkChange);
//     //   window.addEventListener("offline", handleNetworkChange);
//     //   return () => {
//     //     // reomve , delete, pause , stop here
//     //     window.removeEventListener("online", handleNetworkChange);
//     //     window.removeEventListener("offline", handleNetworkChange);
//     //   };
//     },
//     [

//       // update, mount, unmount
//     ]
//   );

//   return navigator.onLine;
// }
