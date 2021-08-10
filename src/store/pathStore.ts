import { action, makeAutoObservable, observable } from "mobx";

import { RootStore } from "./index";

import { IPath } from "models/path";

import generateId from "utils/generateId";

export default class TodoStore {
  rootStore: RootStore;

  @observable pathList: IPath[] = [];
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
  @action
  addPath = ({
    title,
    description,
    pathSize,
    id = generateId(),
    isFavourite = false,
    // coordinates:[{lat:'kek',lng:'lol'}]
  }: IPath) => {
    this.pathList = [
      ...this.pathList,
      { title, description, pathSize, id, isFavourite },
    ];
  };
}
