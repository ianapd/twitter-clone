import Head from 'next/head'
import { AppLayout } from '../layouts/AppLayout'
import { IconButton, Text, Box, Container, Spacer, Avatar } from '@chakra-ui/react'

import { IoImageOutline, IoCalendarClearOutline, IoLocationOutline, IoHappyOutline } from 'react-icons/io5'
import { BsStars, BsBarChartLine } from 'react-icons/bs'
import { MdGif } from 'react-icons/md'

import { Hero } from '../components/Hero'
import { TweetsList } from '../collections/TweetsList'

import tweetsData from '../data/tweets.json'
import { AppHeader } from '../components/Header'

const icons = [
  <IoImageOutline size={24} color="#1C9BE8" />,
  <MdGif size={24} color="#1C9BE8" />,
  <BsBarChartLine size={24} color="#1C9BE8" />,
  <IoHappyOutline size={24} color="#1C9BE8" />,
  <IoCalendarClearOutline size={24} color="#1C9BE8" />,
  <IoLocationOutline size={24} color="#1C9BE8" />
]

export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <Box>
        <Container maxW={{ base: 'container.xl', '2xl': 'full' }}>
          <Hero icons={icons} />
          <TweetsList items={tweetsData} />
        </Container>
      </Box>
    </AppLayout>
  )
}
