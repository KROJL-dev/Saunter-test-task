import React, { useState } from "react";

import Header from "component/Header/index";

import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  DirectionsRenderer,
} from "react-google-maps";

import styles from "./style.module.scss";

import { observer } from "mobx-react";

import { useStore } from "store/index";

import Map from "component/Map";
const SEARCHICON = "https://image.flaticon.com/icons/png/512/16/16492.png";
 
const WrappedMap = withScriptjs(withGoogleMap(Map));
const MainPage = () => {
  const { pathStore } = useStore();
  const [searchPath, setSearchPath] = useState<string>();

  return (
    <div className={styles.mainPage}>
      <Header />
      <div className={styles.partContentWrapper}>
        <div className={styles.pathPart}>
          <div className={styles.searchWrapper}>
            <input
              placeholder="Search ..."
              value={searchPath}
              onChange={({ target }) => {
                let newTarget = target as HTMLInputElement;
                setSearchPath(newTarget.value);
              }}
              className={styles.inputSearch}
            />
            <img src={SEARCHICON} alt="search" className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.selectPath}>
          <WrappedMap
            //@ts-ignore
            isMarkerShown
            //@ts-ignore
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCCTPcTTyRlvafpsRsSSeilQcobRXjcOhg"
            //@ts-ignore
            loadingElement={<div style={{ height: `100%` }} />}
            //@ts-ignore
            containerElement={<div style={{ height: `400px` }} />}
            //@ts-ignore
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  );
};
export default observer(MainPage);
