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

  const fetchData = async (promiseArray: Promise<AxiosResponse<any>>[], dataKeys: string[]) => {
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
    setLoading(false)
  }

  useEffect(() => {
    if (loading === true) {
      let promiseArray: any[] = []
      const dataKeys = Object.keys(data)
      dataKeys.forEach(key => promiseArray.push(api.get(key)))
      fetchData(promiseArray, dataKeys)
    }
    // eslint-disable-next-line
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