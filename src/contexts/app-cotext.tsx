import { AxiosResponse } from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AboutParagraphType, ContactType, EventType, MediaType, MemberType, SectionType } from "../interfaces";
import api from "../services/api";

type AppProviderProps = {
  children: ReactNode;
};

interface AppContextData {
  loading: boolean;
  data: DataProps;
}

interface DataProps {
  sections: SectionType[];
  paragraphs: AboutParagraphType[];
  contacts: ContactType[];
  events: EventType[];
  medias: MediaType[];
  members: MemberType[];
}

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({children}: AppProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<DataProps>({
    sections: [],
    paragraphs: [],
    contacts: [],
    events: [],
    medias: [],
    members: [],
  })

  useEffect(() => {
    const fetchData = async (promiseArray: Promise<AxiosResponse<any>>[], dataKeys: string[]) => {
      try {
        const response = await Promise.all(promiseArray).then(responses => {
          return responses.map(response => {
            const { data } = response
            return data.data
          })
        })
        dataKeys.forEach((key, index) => {
          setData(prevState => ({
            ...prevState,
            [key]: response[index]
          }))
        })
      } catch(err) {
        console.log(err);
      }
    }
    let promiseArray: any[] = []
    const dataKeys = Object.keys(data)
    dataKeys.forEach(key => promiseArray.push(api.get(key)))
    fetchData(promiseArray, dataKeys)
    setLoading(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        data
      }}>
      {children}
    </AppContext.Provider>
  );
};