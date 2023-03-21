import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCradPress}) => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handleCradPress}
    >
      <TouchableOpacity
      style={styles.logoContainer}
      >
        <Image 
        source={{ uri: item.employer_logo}}
        style={styles.logoImage}
        resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1} >{item.employer_name} </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard