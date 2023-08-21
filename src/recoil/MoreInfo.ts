import {atom} from "recoil"
import {CardInfoInterface} from '../types/cardInfo'

export const MoreInfoAtom = atom<CardInfoInterface>({
    key:"MoreInfoAtom",
    default:{adult:false,
        gender:0,
        id:0,
        known_for:[],
        known_for_department:"",
        name: "",
        popularity: 0,
        profile_path:""}
})