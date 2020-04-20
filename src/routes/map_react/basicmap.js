/**
 * @ Author: Abhijeet Khire
 * @ Create Time: 2020-04-15 22:50:47
 * @ Modified by: Abhijeet Khire
 * @ Modified time: 2020-04-17 17:07:00
 * @ Description: Map clustring and drawing
 */


// eslint-disable no-undef comment is required to avoid google err 


/* eslint-disable no-undef */
import React, { Component } from 'react'

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GOOGLE_MAP_KEY = "AIzaSyCcXjlA3bLlSEkAeMg-jdB6zIm-4gE4lQs";

const homeIcon = require("../../assets/img/home2.png")

const coords = [
    [
        { lat: 51.509674, lng: -0.193036 },
        { lat: 51.50947, lng: -0.194151 },
        { lat: 51.509116, lng: -0.194034 },
        { lat: 51.509043, lng: -0.19451 },
        { lat: 51.508987, lng: -0.194893 },
        { lat: 51.508931, lng: -0.195204 },
        { lat: 51.508837, lng: -0.195909 },
        { lat: 51.508898, lng: -0.195922 },
        { lat: 51.508636, lng: -0.19703 },
        { lat: 51.508572, lng: -0.197381 },
        { lat: 51.508483, lng: -0.197726 },
        { lat: 51.508389, lng: -0.198136 },
        { lat: 51.508559, lng: -0.198215 },
        { lat: 51.508449, lng: -0.198656 },
        { lat: 51.508334, lng: -0.19927 },
        { lat: 51.508355, lng: -0.19937 },
        { lat: 51.508404, lng: -0.199497 },
        { lat: 51.508372, lng: -0.200011 },
        { lat: 51.508308, lng: -0.200201 },
        { lat: 51.50819, lng: -0.20015 },
        { lat: 51.508158, lng: -0.200309 },
        { lat: 51.507973, lng: -0.200178 },
        { lat: 51.508009, lng: -0.199983 },
        { lat: 51.507734, lng: -0.199859 },
        { lat: 51.507595, lng: -0.200528 },
        { lat: 51.507496, lng: -0.20047 },
        { lat: 51.5074, lng: -0.200796 },
        { lat: 51.507916, lng: -0.201185 },
        { lat: 51.507734, lng: -0.20186 },
        { lat: 51.507004, lng: -0.201298 },
        { lat: 51.50681, lng: -0.202022 },
        { lat: 51.507523, lng: -0.202634 },
        { lat: 51.507358, lng: -0.203272 },
        { lat: 51.507264, lng: -0.203558 },
        { lat: 51.506737, lng: -0.203296 },
        { lat: 51.505841, lng: -0.202894 },
        { lat: 51.50503, lng: -0.202407 },
        { lat: 51.504359, lng: -0.202 },
        { lat: 51.503979, lng: -0.203986 },
        { lat: 51.505132, lng: -0.204652 },
        { lat: 51.504314, lng: -0.207929 },
        { lat: 51.50485, lng: -0.208263 },
        { lat: 51.504698, lng: -0.208794 },
        { lat: 51.50548, lng: -0.209299 },
        { lat: 51.505231, lng: -0.210223 },
        { lat: 51.505093, lng: -0.21072 },
        { lat: 51.505384, lng: -0.211053 },
        { lat: 51.505344, lng: -0.211453 },
        { lat: 51.505514, lng: -0.211823 },
        { lat: 51.505348, lng: -0.211854 },
        { lat: 51.505309, lng: -0.211988 },
        { lat: 51.505195, lng: -0.212567 },
        { lat: 51.504979, lng: -0.213457 },
        { lat: 51.504719, lng: -0.213341 },
        { lat: 51.50446, lng: -0.21386 },
        { lat: 51.50409, lng: -0.214612 },
        { lat: 51.503675, lng: -0.21538 },
        { lat: 51.503819, lng: -0.215575 },
        { lat: 51.503955, lng: -0.215803 },
        { lat: 51.504157, lng: -0.216115 },
        { lat: 51.504697, lng: -0.216664 },
        { lat: 51.505006, lng: -0.216933 },
        { lat: 51.505154, lng: -0.217028 },
        { lat: 51.506635, lng: -0.218002 },
        { lat: 51.507697, lng: -0.218438 },
        { lat: 51.509346, lng: -0.219019 },
        { lat: 51.510592, lng: -0.219563 },
        { lat: 51.510783, lng: -0.218558 },
        { lat: 51.510973, lng: -0.218644 },
        { lat: 51.51139, lng: -0.217159 },
        { lat: 51.511867, lng: -0.217508 },
        { lat: 51.512312, lng: -0.217786 },
        { lat: 51.513191, lng: -0.217742 },
        { lat: 51.513566, lng: -0.217693 },
        { lat: 51.513786, lng: -0.217376 },
        { lat: 51.514472, lng: -0.216459 },
        { lat: 51.514837, lng: -0.215982 },
        { lat: 51.514681, lng: -0.214373 },
        { lat: 51.514809, lng: -0.214046 },
        { lat: 51.51498, lng: -0.214358 },
        { lat: 51.515125, lng: -0.21464 },
        { lat: 51.515283, lng: -0.214953 },
        { lat: 51.515408, lng: -0.215209 },
        { lat: 51.51574, lng: -0.214768 },
        { lat: 51.51602, lng: -0.214328 },
        { lat: 51.51621, lng: -0.214002 },
        { lat: 51.516432, lng: -0.213602 },
        { lat: 51.516688, lng: -0.21307 },
        { lat: 51.516888, lng: -0.212534 },
        { lat: 51.516994, lng: -0.212201 },
        { lat: 51.517134, lng: -0.211736 },
        { lat: 51.517035, lng: -0.211667 },
        { lat: 51.517105, lng: -0.211376 },
        { lat: 51.516988, lng: -0.211305 },
        { lat: 51.517082, lng: -0.210853 },
        { lat: 51.517141, lng: -0.210545 },
        { lat: 51.516732, lng: -0.210296 },
        { lat: 51.516876, lng: -0.209659 },
        { lat: 51.517014, lng: -0.209062 },
        { lat: 51.517877, lng: -0.209587 },
        { lat: 51.518054, lng: -0.208841 },
        { lat: 51.518286, lng: -0.208129 },
        { lat: 51.518492, lng: -0.20758 },
        { lat: 51.518784, lng: -0.207045 },
        { lat: 51.519139, lng: -0.206478 },
        { lat: 51.519616, lng: -0.205846 },
        { lat: 51.520117, lng: -0.205226 },
        { lat: 51.520539, lng: -0.204596 },
        { lat: 51.520834, lng: -0.204102 },
        { lat: 51.521147, lng: -0.203341 },
        { lat: 51.521347, lng: -0.202625 },
        { lat: 51.521484, lng: -0.202017 },
        { lat: 51.521577, lng: -0.201501 },
        { lat: 51.521621, lng: -0.201069 },
        { lat: 51.521142, lng: -0.200714 },
        { lat: 51.520706, lng: -0.200381 },
        { lat: 51.520257, lng: -0.200017 },
        { lat: 51.519936, lng: -0.199719 },
        { lat: 51.519321, lng: -0.19918 },
        { lat: 51.518564, lng: -0.198376 },
        { lat: 51.518482, lng: -0.198646 },
        { lat: 51.5182, lng: -0.198452 },
        { lat: 51.517723, lng: -0.198155 },
        { lat: 51.517866, lng: -0.198674 },
        { lat: 51.517713, lng: -0.199232 },
        { lat: 51.517543, lng: -0.199123 },
        { lat: 51.517442, lng: -0.199467 },
        { lat: 51.517221, lng: -0.199317 },
        { lat: 51.517042, lng: -0.200034 },
        { lat: 51.516869, lng: -0.199919 },
        { lat: 51.51666, lng: -0.199702 },
        { lat: 51.516671, lng: -0.19937 },
        { lat: 51.515998, lng: -0.199152 },
        { lat: 51.515835, lng: -0.199152 },
        { lat: 51.515473, lng: -0.19917 },
        { lat: 51.515328, lng: -0.199102 },
        { lat: 51.515319, lng: -0.198636 },
        { lat: 51.515311, lng: -0.198433 },
        { lat: 51.515027, lng: -0.198351 },
        { lat: 51.515126, lng: -0.197644 },
        { lat: 51.515567, lng: -0.197507 },
        { lat: 51.515579, lng: -0.197053 },
        { lat: 51.515289, lng: -0.196986 },
        { lat: 51.515302, lng: -0.196312 },
        { lat: 51.515353, lng: -0.195184 },
        { lat: 51.515069, lng: -0.195067 },
        { lat: 51.514918, lng: -0.195032 },
        { lat: 51.514796, lng: -0.195232 },
        { lat: 51.514608, lng: -0.195556 },
        { lat: 51.514356, lng: -0.195169 },
        { lat: 51.514108, lng: -0.195138 },
        { lat: 51.514091, lng: -0.195507 },
        { lat: 51.514209, lng: -0.195559 },
        { lat: 51.514158, lng: -0.196059 },
        { lat: 51.513977, lng: -0.195994 },
        { lat: 51.513696, lng: -0.196288 },
        { lat: 51.513425, lng: -0.196522 },
        { lat: 51.513344, lng: -0.196312 },
        { lat: 51.512859, lng: -0.196239 },
        { lat: 51.512816, lng: -0.196908 },
        { lat: 51.512375, lng: -0.197152 },
        { lat: 51.51223, lng: -0.197723 },
        { lat: 51.512025, lng: -0.197748 },
        { lat: 51.511752, lng: -0.197725 },
        { lat: 51.511592, lng: -0.197712 },
        { lat: 51.511545, lng: -0.197337 },
        { lat: 51.511096, lng: -0.197239 },
        { lat: 51.510389, lng: -0.197132 },
        { lat: 51.510039, lng: -0.197037 },
        { lat: 51.50966, lng: -0.196927 },
        { lat: 51.509219, lng: -0.19679 },
        { lat: 51.509273, lng: -0.196552 },
        { lat: 51.509351, lng: -0.196023 },
        { lat: 51.509481, lng: -0.196054 },
        { lat: 51.50954, lng: -0.19565 },
        { lat: 51.509627, lng: -0.19568 },
        { lat: 51.509741, lng: -0.194873 },
        { lat: 51.509626, lng: -0.194822 },
        { lat: 51.509774, lng: -0.193945 },
        { lat: 51.509903, lng: -0.193127 },
        { lat: 51.509771, lng: -0.193075 },
        { lat: 51.509674, lng: -0.193036 }
    ]
]


const cityData = [
    {
        name: 'Mumbai',
        state: 'Maharashtra',
        lat: '18.975',
        lon: '72.825833',
    },
    {
        name: 'Delhi',
        state: 'Delhi',
        lat: '28.666667',
        lon: '77.216667',
    },
    {
        name: 'Bangalore',
        state: 'Karnataka',
        lat: '12.983333',
        lon: '77.583333',
    },
    {
        name: 'Hyderabad',
        state: 'Telangana',
        lat: '17.375278',
        lon: '78.474444',
    },
    {
        name: 'Ahmedabad',
        state: 'Gujarat',
        lat: '23.033333',
        lon: '72.616667',
    },
    {
        name: 'Chennai',
        state: 'Tamil Nadu',
        lat: '13.083333',
        lon: '80.283333',
    },
    {
        name: 'Kolkata',
        state: 'West Bengal',
        lat: '22.569722',
        lon: '88.369722',
    },
    {
        name: 'Surat',
        state: 'Gujarat',
        lat: '20.966667',
        lon: '72.9',
    },
    {
        name: 'Pune',
        state: 'Maharashtra',
        lat: '18.533333',
        lon: '73.866667',
    },
    {
        name: 'Jaipur',
        state: 'Rajasthan',
        lat: '24.583333',
        lon: '86.85',
    },
    {
        name: 'Lucknow',
        state: 'Uttar Pradesh',
        lat: '26.85',
        lon: '80.916667',
    },
    {
        name: 'Kanpur',
        state: 'Uttar Pradesh',
        lat: '26.466667',
        lon: '80.35',
    },
    {
        name: 'Nagpur',
        state: 'Maharashtra',
        lat: '23.3',
        lon: '82.3',
    },
    {
        name: 'Indore',
        state: 'Madhya Pradesh',
        lat: '22.716667',
        lon: '75.833333',
    },
    {
        name: 'Thane',
        state: 'Maharashtra',
        lat: '19.2',
        lon: '72.966667',
    },
    {
        name: 'Bhopal',
        state: 'Madhya Pradesh',
        lat: '23.266667',
        lon: '77.4',
    },
    {
        name: 'Visakhapatnam',
        state: 'Andhra Pradesh',
        lat: '17.7',
        lon: '83.3',
    },
    {
        name: 'Pimpri-Chinchwad',
        state: 'Maharashtra',
        lat: '18.6279288',
        lon: '73.8009829',
    },
    {
        name: 'Patna',
        state: 'Bihar',
        lat: '23.3',
        lon: '82.666667',
    },
    {
        name: 'Vadodara',
        state: 'Gujarat',
        lat: '22.3',
        lon: '73.2',
    },
    {
        name: 'Ghaziabad',
        state: 'Uttar Pradesh',
        lat: '28.666667',
        lon: '77.433333',
    },
    {
        name: 'Ludhiana',
        state: 'Punjab',
        lat: '30.9',
        lon: '75.85',
    },
    {
        name: 'Agra',
        state: 'Uttar Pradesh',
        lat: '27.183333',
        lon: '78.016667',
    },
    {
        name: 'Nashik',
        state: 'Maharashtra',
        lat: '20.0110224',
        lon: '73.7903373',
    },
    {
        name: 'Faridabad',
        state: 'Haryana',
        lat: '28.433333',
        lon: '77.316667',
    },
    {
        name: 'Meerut',
        state: 'Uttar Pradesh',
        lat: '28.983333',
        lon: '77.7',
    },
    {
        name: 'Rajkot',
        state: 'Gujarat',
        lat: '25.731111',
        lon: '75.5925',
    },
    {
        name: 'Kalyan-Dombivali',
        state: 'Maharashtra',
        lat: '19.235433',
        lon: '73.129889',
    },
    {
        name: 'Vasai-Virar',
        state: 'Maharashtra',
        lat: '19.4258788',
        lon: '72.8224901',
    },
    {
        name: 'Varanasi',
        state: 'Uttar Pradesh',
        lat: '25.333333',
        lon: '83',
    },
    {
        name: 'Srinagar',
        state: 'Jammu and Kashmir',
        lat: '30.216667',
        lon: '78.783333',
    },
    {
        name: 'Aurangabad',
        state: 'Maharashtra',
        lat: '26.596',
        lon: '79.9701',
    },
    {
        name: 'Dhanbad',
        state: 'Jharkhand',
        lat: '23.8',
        lon: '86.45',
    },
    {
        name: 'Amritsar',
        state: 'Punjab',
        lat: '31.633056',
        lon: '74.865556',
    },
    {
        name: 'Navi Mumbai',
        state: 'Maharashtra',
        lat: '19.033049',
        lon: '73.029662',
    },
    {
        name: 'Allahabad',
        state: 'Uttar Pradesh',
        lat: '25.45',
        lon: '81.85',
    },
    {
        name: 'Ranchi',
        state: 'Jharkhand',
        lat: '23.35',
        lon: '85.333333',
    },
    {
        name: 'Howrah',
        state: 'West Bengal',
        lat: '22.589167',
        lon: '88.310278',
    },
    {
        name: 'Coimbatore',
        state: 'Tamil Nadu',
        lat: '10.9925',
        lon: '76.961389',
    },
    {
        name: 'Jabalpur',
        state: 'Madhya Pradesh',
        lat: '23.166667',
        lon: '79.95',
    },
    {
        name: 'Gwalior',
        state: 'Madhya Pradesh',
        lat: '26.223611',
        lon: '78.179167',
    },
    {
        name: 'Vijayawada',
        state: 'Andhra Pradesh',
        lat: '16.516667',
        lon: '80.616667',
    },
    {
        name: 'Jodhpur',
        state: 'Rajasthan',
        lat: '26.286667',
        lon: '73.03',
    },
    {
        name: 'Madurai',
        state: 'Tamil Nadu',
        lat: '9.933333',
        lon: '78.116667',
    },
    {
        name: 'Raipur',
        state: 'Chhattisgarh',
        lat: '30.316667',
        lon: '78.1',
    },
    {
        name: 'Kota',
        state: 'Rajasthan',
        lat: '29.825278',
        lon: '78.671389',
    },
    {
        name: 'Guwahati',
        state: 'Assam',
        lat: '26.183333',
        lon: '91.733333',
    },
    {
        name: 'Chandigarh',
        state: 'Chandigarh',
        lat: '30.7343',
        lon: '76.7933',
    },
    {
        name: 'Solapur',
        state: 'Maharashtra',
        lat: '17.683333',
        lon: '75.916667',
    },
    {
        name: 'Hubballi-Dharwad',
        state: 'Karnataka',
        lat: '15.364708',
        lon: '75.123955',
    },
    {
        name: 'Bareilly',
        state: 'Uttar Pradesh',
        lat: '28.35',
        lon: '79.416667',
    },
    {
        name: 'Moradabad',
        state: 'Uttar Pradesh',
        lat: '28.833333',
        lon: '78.783333',
    },
    {
        name: 'Mysore',
        state: 'Karnataka',
        lat: '12.307222',
        lon: '76.649722',
    },
    {
        name: 'Gurgaon',
        state: 'Haryana',
        lat: '27.6928',
        lon: '79.6766',
    },
    {
        name: 'Aligarh',
        state: 'Uttar Pradesh',
        lat: '27.883333',
        lon: '78.083333',
    },
    {
        name: 'Jalandhar',
        state: 'Punjab',
        lat: '23.9',
        lon: '78.433333',
    },
    {
        name: 'Tiruchirappalli',
        state: 'Tamil Nadu',
        lat: '10.805',
        lon: '78.685556',
    },
    {
        name: 'Bhubaneswar',
        state: 'Orissa',
        lat: '20.233333',
        lon: '85.833333',
    },
    {
        name: 'Salem',
        state: 'Tamil Nadu',
        lat: '15.7',
        lon: '73.916667',
    },
    {
        name: 'Mira-Bhayandar',
        state: 'Maharashtra',
        lat: '19.295233',
        lon: '72.854390\t',
    },
    {
        name: 'Warangal',
        state: 'Telangana',
        lat: '18',
        lon: '79.583333',
    },
    {
        name: 'Thiruvananthapuram',
        state: 'Kerala',
        lat: '8.506944',
        lon: '76.956944',
    },
    {
        name: 'Guntur',
        state: 'Andhra Pradesh',
        lat: '16.3',
        lon: '80.45',
    },
    {
        name: 'Bhiwandi',
        state: 'Maharashtra',
        lat: '19.3',
        lon: '73.066667',
    },
    {
        name: 'Saharanpur',
        state: 'Uttar Pradesh',
        lat: '29.966667',
        lon: '77.55',
    },
    {
        name: 'Gorakhpur',
        state: 'Uttar Pradesh',
        lat: '26.755',
        lon: '83.373889',
    },
    {
        name: 'Bikaner',
        state: 'Rajasthan',
        lat: '28.016667',
        lon: '73.3',
    },
    {
        name: 'Amravati',
        state: 'Maharashtra',
        lat: '20.933333',
        lon: '77.75',
    },
    {
        name: 'Noida',
        state: 'Uttar Pradesh',
        lat: '28.5726442',
        lon: '77.3547609',
    },
    {
        name: 'Jamshedpur',
        state: 'Jharkhand',
        lat: '22.8',
        lon: '86.183333',
    },
    {
        name: 'Bhilai',
        state: 'Chhattisgarh',
        lat: '21.216667',
        lon: '81.433333',
    },
    {
        name: 'Cuttack',
        state: 'Orissa',
        lat: '20.5',
        lon: '85.833333',
    },
    {
        name: 'Firozabad',
        state: 'Uttar Pradesh',
        lat: '27.15',
        lon: '78.416667',
    },
    {
        name: 'Kochi',
        state: 'Kerala',
        lat: '9.966667',
        lon: '76.233333',
    },
    {
        name: 'Bhavnagar',
        state: 'Gujarat',
        lat: '21.766667',
        lon: '72.15',
    },
    {
        name: 'Dehradun',
        state: 'Uttarakhand',
        lat: '30.3255646',
        lon: '78.0436813',
    },
    {
        name: 'Durgapur',
        state: 'West Bengal',
        lat: '24.75',
        lon: '87.733333',
    },
    {
        name: 'Asansol',
        state: 'West Bengal',
        lat: '24.233333',
        lon: '87.283333',
    },
    {
        name: 'Nanded',
        state: 'Maharashtra',
        lat: '19.15',
        lon: '77.333333',
    },
    {
        name: 'Kolhapur',
        state: 'Maharashtra',
        lat: '16.7',
        lon: '74.216667',
    },
    {
        name: 'Ajmer',
        state: 'Rajasthan',
        lat: '26.45',
        lon: '74.633333',
    },
    {
        name: 'Gulbarga',
        state: 'Karnataka',
        lat: '17.333333',
        lon: '76.833333',
    },
    {
        name: 'Jamnagar',
        state: 'Gujarat',
        lat: '22.466667',
        lon: '70.066667',
    },
    {
        name: 'Ujjain',
        state: 'Madhya Pradesh',
        lat: '23.183333',
        lon: '75.766667',
    },
    {
        name: 'Loni',
        state: 'Uttar Pradesh',
        lat: '28.75',
        lon: '77.283333',
    },
    {
        name: 'Siliguri',
        state: 'West Bengal',
        lat: '26.716111',
        lon: '88.423611',
    },
    {
        name: 'Jhansi',
        state: 'Uttar Pradesh',
        lat: '25.433333',
        lon: '78.583333',
    },
    {
        name: 'Ulhasnagar',
        state: 'Maharashtra',
        lat: '19.216667',
        lon: '73.15',
    },
    {
        name: 'Nellore',
        state: 'Andhra Pradesh',
        lat: '14.433333',
        lon: '79.966667',
    },
    {
        name: 'Jammu',
        state: 'Jammu and Kashmir',
        lat: '32.733333',
        lon: '74.866667',
    },
    {
        name: 'Sangli-Miraj & Kupwad',
        state: 'Maharashtra',
        lat: '16.860446',
        lon: '74.565518',
    },
    {
        name: 'Belgaum',
        state: 'Karnataka',
        lat: '15.866667',
        lon: '74.5',
    },
    {
        name: 'Mangalore',
        state: 'Karnataka',
        lat: '12.863889',
        lon: '74.835278',
    },
    {
        name: 'Ambattur',
        state: 'Tamil Nadu',
        lat: '13.076667',
        lon: '80.088611',
    },
    {
        name: 'Tirunelveli',
        state: 'Tamil Nadu',
        lat: '8.733333',
        lon: '77.7',
    },
    {
        name: 'Malegaon',
        state: 'Maharashtra',
        lat: '20.55',
        lon: '74.533333',
    },
    {
        name: 'Gaya',
        state: 'Bihar',
        lat: '24.783333',
        lon: '85',
    },
    {
        name: 'Jalgaon',
        state: 'Maharashtra',
        lat: '21.048611',
        lon: '76.534444',
    },
    {
        name: 'Udaipur',
        state: 'Rajasthan',
        lat: '26.6978',
        lon: '79.9216',
    },
    {
        name: 'Maheshtala',
        state: 'West Bengal',
        lat: '22.508621',
        lon: '88.2532182',
    },
    {
        name: 'Tirupur',
        state: 'Tamil Nadu',
        lat: '11.1',
        lon: '77.35',
    },
    {
        name: 'Davanagere',
        state: 'Karnataka',
        lat: '14.4596984',
        lon: '75.9289654951128',
    },
    {
        name: 'Kozhikode',
        state: 'Kerala',
        lat: '11.25',
        lon: '75.766667',
    },
    {
        name: 'Akola',
        state: 'Maharashtra',
        lat: '24.766667',
        lon: '74.2',
    },
    {
        name: 'Kurnool',
        state: 'Andhra Pradesh',
        lat: '15.833333',
        lon: '78.05',
    },
    {
        name: 'Rajpur Sonarpur',
        state: 'West Bengal',
        lat: '22.449089',
        lon: '88.391473',
    },
    {
        name: 'Bokaro',
        state: 'Jharkhand',
        lat: '23.783333',
        lon: '85.966667',
    },
    {
        name: 'South Dumdum',
        state: 'West Bengal',
        lat: '22.610000',
        lon: '88.400000',
    },
    {
        name: 'Bellary',
        state: 'Karnataka',
        lat: '15.15',
        lon: '76.933333',
    },
    {
        name: 'Patiala',
        state: 'Punjab',
        lat: '30.326667',
        lon: '76.400278',
    },
    {
        name: 'Gopalpur',
        state: 'West Bengal',
        lat: '24.833333',
        lon: '87.8',
    },
    {
        name: 'Agartala',
        state: 'Tripura',
        lat: '23.836389',
        lon: '91.275',
    },
    {
        name: 'Bhagalpur',
        state: 'Bihar',
        lat: '26.169722',
        lon: '83.872778',
    },
    {
        name: 'Muzaffarnagar',
        state: 'Uttar Pradesh',
        lat: '29.466667',
        lon: '77.683333',
    },
    {
        name: 'Bhatpara',
        state: 'West Bengal',
        lat: '22.871389',
        lon: '88.408889',
    },
    {
        name: 'Panihati',
        state: 'West Bengal',
        lat: '22.694167',
        lon: '88.374444',
    },
    {
        name: 'Latur',
        state: 'Maharashtra',
        lat: '18.4',
        lon: '76.583333',
    },
    {
        name: 'Dhule',
        state: 'Maharashtra',
        lat: '20.9',
        lon: '74.783333',
    },
    {
        name: 'Rohtak',
        state: 'Haryana',
        lat: '28.9',
        lon: '76.566667',
    },
    {
        name: 'Korba',
        state: 'Chhattisgarh',
        lat: '22.35',
        lon: '82.683333',
    },
    {
        name: 'Bhilwara',
        state: 'Rajasthan',
        lat: '25.35',
        lon: '74.633333',
    },
    {
        name: 'Brahmapur',
        state: 'Orissa',
        lat: '19.316667',
        lon: '84.783333',
    },
    {
        name: 'Muzaffarpur',
        state: 'Bihar',
        lat: '26.116667',
        lon: '85.4',
    },
    {
        name: 'Ahmednagar',
        state: 'Maharashtra',
        lat: '19.083333',
        lon: '74.733333',
    },
    {
        name: 'Mathura',
        state: 'Uttar Pradesh',
        lat: '27.5',
        lon: '77.683333',
    },
    {
        name: 'Kollam',
        state: 'Kerala',
        lat: '8.880556',
        lon: '76.591667',
    },
    {
        name: 'Avadi',
        state: 'Tamil Nadu',
        lat: '13.115556',
        lon: '80.101667',
    },
    {
        name: 'Rajahmundry',
        state: 'Andhra Pradesh',
        lat: '16.983333',
        lon: '81.783333',
    },
    {
        name: 'Kadapa',
        state: 'Andhra Pradesh',
        lat: '14.466667',
        lon: '78.816667',
    },
    {
        name: 'Kamarhati',
        state: 'West Bengal',
        lat: '22.671111',
        lon: '88.374722',
    },
    {
        name: 'Bilaspur',
        state: 'Chhattisgarh',
        lat: '22.083333',
        lon: '82.15',
    },
    {
        name: 'Shahjahanpur',
        state: 'Uttar Pradesh',
        lat: '27.883333',
        lon: '79.916667',
    },
    {
        name: 'Bijapur',
        state: 'Karnataka',
        lat: '18.8',
        lon: '80.816667',
    },
    {
        name: 'Rampur',
        state: 'Uttar Pradesh',
        lat: '23.283333',
        lon: '85.433333',
    },
    {
        name: 'Shivamogga (Shimoga)',
        state: 'Karnataka',
        lat: '13.929930',
        lon: '75.568101',
    },
    {
        name: 'Chandrapur',
        state: 'Maharashtra',
        lat: '19.6',
        lon: '83.883333',
    },
    {
        name: 'Junagadh',
        state: 'Gujarat',
        lat: '21.516667',
        lon: '70.466667',
    },
    {
        name: 'Thrissur',
        state: 'Kerala',
        lat: '10.516667',
        lon: '76.216667',
    },
    {
        name: 'Alwar',
        state: 'Rajasthan',
        lat: '27.566667',
        lon: '76.6',
    },
    {
        name: 'Bardhaman',
        state: 'West Bengal',
        lat: '23.240556',
        lon: '87.869444',
    },
    {
        name: 'Kulti',
        state: 'West Bengal',
        lat: '23.733333',
        lon: '86.85',
    },
    {
        name: 'Kakinada',
        state: 'Andhra Pradesh',
        lat: '16.933333',
        lon: '82.216667',
    },
    {
        name: 'Nizamabad',
        state: 'Telangana',
        lat: '26.050556',
        lon: '83.058889',
    },
    {
        name: 'Parbhani',
        state: 'Maharashtra',
        lat: '19.266667',
        lon: '76.783333',
    },
    {
        name: 'Tumkur',
        state: 'Karnataka',
        lat: '13.342222',
        lon: '77.101667',
    },
    {
        name: 'Hisar',
        state: 'Haryana',
        lat: '29.166667',
        lon: '75.716667',
    },
    {
        name: 'Ozhukarai',
        state: 'Puducherry',
        lat: '11.948880',
        lon: '79.712141',
    },
    {
        name: 'Bihar Sharif',
        state: 'Bihar',
        lat: '25.183333',
        lon: '85.516667',
    },
    {
        name: 'Panipat',
        state: 'Haryana',
        lat: '29.388889',
        lon: '76.968056',
    },
    {
        name: 'Darbhanga',
        state: 'Bihar',
        lat: '26.166667',
        lon: '85.9',
    },
    {
        name: 'Bally',
        state: 'West Bengal',
        lat: '15.166667',
        lon: '74.033333',
    },
    {
        name: 'Aizawl',
        state: 'Mizoram',
        lat: '23.724444',
        lon: '92.7175',
    },
    {
        name: 'Dewas',
        state: 'Madhya Pradesh',
        lat: '22.966667',
        lon: '76.066667',
    },
    {
        name: 'Ichalkaranji',
        state: 'Maharashtra',
        lat: '16.7',
        lon: '74.466667',
    },
    {
        name: 'Tirupati',
        state: 'Andhra Pradesh',
        lat: '13.65',
        lon: '79.416667',
    },
    {
        name: 'Karnal',
        state: 'Haryana',
        lat: '29.683333',
        lon: '76.983333',
    },
    {
        name: 'Bathinda',
        state: 'Punjab',
        lat: '30.2081076',
        lon: '74.9485371',
    },
    {
        name: 'Jalna',
        state: 'Maharashtra',
        lat: '24.0988',
        lon: '79.2137',
    },
    {
        name: 'Barasat',
        state: 'West Bengal',
        lat: '22.684167',
        lon: '88.441111',
    },
    {
        name: 'Kirari Suleman Nagar',
        state: 'Delhi',
        lat: '28.701638',
        lon: '77.047811',
    },
    {
        name: 'Purnia',
        state: 'Bihar',
        lat: '24.516667',
        lon: '87.133333',
    },
    {
        name: 'Satna',
        state: 'Madhya Pradesh',
        lat: '24.583333',
        lon: '80.833333',
    },
    {
        name: 'Mau',
        state: 'Uttar Pradesh',
        lat: '25.941667',
        lon: '83.561111',
    },
    {
        name: 'Sonipat',
        state: 'Haryana',
        lat: '28.983333',
        lon: '77.016667',
    },
    {
        name: 'Farrukhabad',
        state: 'Uttar Pradesh',
        lat: '27.4',
        lon: '79.566667',
    },
    {
        name: 'Sagar',
        state: 'Madhya Pradesh',
        lat: '22.066667',
        lon: '82',
    },
    {
        name: 'Rourkela',
        state: 'Orissa',
        lat: '22.2',
        lon: '84.883333',
    },
    {
        name: 'Durg',
        state: 'Chhattisgarh',
        lat: '21.183333',
        lon: '81.283333',
    },
    {
        name: 'Imphal',
        state: 'Manipur',
        lat: '24.816667',
        lon: '93.95',
    },
    {
        name: 'Ratlam',
        state: 'Madhya Pradesh',
        lat: '23.316667',
        lon: '75.066667',
    },
    {
        name: 'Hapur',
        state: 'Uttar Pradesh',
        lat: '28.716667',
        lon: '77.783333',
    },
    {
        name: 'Anantapur',
        state: 'Andhra Pradesh',
        lat: '26.829',
        lon: '79.5342',
    },
    {
        name: 'Arrah',
        state: 'Bihar',
        lat: '25.566667',
        lon: '84.666667',
    },
    {
        name: 'Karimnagar',
        state: 'Telangana',
        lat: '27.7974',
        lon: '79.2581',
    },
    {
        name: 'Etawah',
        state: 'Uttar Pradesh',
        lat: '26.7769',
        lon: '79.0239',
    },
    {
        name: 'Ambernath',
        state: 'Maharashtra',
        lat: '19.2015607',
        lon: '73.2004771',
    },
    {
        name: 'North Dumdum',
        state: 'West Bengal',
        lat: '22.652080',
        lon: '88.419070',
    },
    {
        name: 'Bharatpur',
        state: 'Rajasthan',
        lat: '27.1268',
        lon: '79.3921',
    },
    {
        name: 'Begusarai',
        state: 'Bihar',
        lat: '25.416667',
        lon: '86.133333',
    },
    {
        name: 'New Delhi',
        state: 'Delhi',
        lat: '28.6',
        lon: '77.2',
    },
    {
        name: 'Gandhidham',
        state: 'Gujarat',
        lat: '23.083333',
        lon: '70.133333',
    },
    {
        name: 'Baranagar',
        state: 'West Bengal',
        lat: '22.643333',
        lon: '88.365278',
    },
    {
        name: 'Tiruvottiyur',
        state: 'Tamil Nadu',
        lat: '13.157778',
        lon: '80.304167',
    },
    {
        name: 'Puducherry',
        state: 'Puducherry',
        lat: '11.93',
        lon: '79.83',
    },
    {
        name: 'Sikar',
        state: 'Rajasthan',
        lat: '27.616667',
        lon: '75.15',
    },
    {
        name: 'Thoothukudi',
        state: 'Tamil Nadu',
        lat: '8.783333',
        lon: '78.133333',
    },
    {
        name: 'Rewa',
        state: 'Madhya Pradesh',
        lat: '27.9161',
        lon: '79.0231',
    },
    {
        name: 'Mirzapur',
        state: 'Uttar Pradesh',
        lat: '25.15',
        lon: '82.583333',
    },
    {
        name: 'Raichur',
        state: 'Karnataka',
        lat: '16.2',
        lon: '77.366667',
    },
    {
        name: 'Pali',
        state: 'Rajasthan',
        lat: '29.85',
        lon: '78.543889',
    },
    {
        name: 'Khammam',
        state: 'Telangana',
        lat: '17.25',
        lon: '80.15',
    },
    {
        name: 'Vizianagaram',
        state: 'Andhra Pradesh',
        lat: '18.116667',
        lon: '83.416667',
    },
    {
        name: 'Katihar',
        state: 'Bihar',
        lat: '25.533333',
        lon: '87.583333',
    },
    {
        name: 'Haridwar',
        state: 'Uttarakhand',
        lat: '29.966667',
        lon: '78.166667',
    },
    {
        name: 'Sri Ganganagar',
        state: 'Rajasthan',
        lat: '29.916667',
        lon: '73.883333',
    },
    {
        name: 'Karawal Nagar',
        state: 'Delhi',
        lat: '28.728310',
        lon: '77.276926',
    },
    {
        name: 'Nagercoil',
        state: 'Tamil Nadu',
        lat: '8.193889',
        lon: '77.431389',
    },
    {
        name: 'Mango',
        state: 'Jharkhand',
        lat: '13.22526165',
        lon: '79.1055442299247',
    },
    {
        name: 'Bulandshahr',
        state: 'Uttar Pradesh',
        lat: '28.4',
        lon: '77.85',
    },
    {
        name: 'Thanjavur',
        state: 'Tamil Nadu',
        lat: '10.8',
        lon: '79.15',
    },
];

const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const DrawingManagerWrapper = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(18.521609, 73.854105)}
        disableDefaultUI={false}
    // options={

    // }
    >
        {props.mapDrawing ? <DrawingManager
            setMap={props.removePolygon ? null : GoogleMap}
            onPolygonComplete={props.onDrawCompleted}
            defaultOptions={{
                drawingControl: true,
                // drawingMode: google.maps.drawing.OverlayType.POLYGON,
                drawingControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [google.maps.drawing.OverlayType.POLYGON]
                },
                polygonOptions: {
                    fillColor: "#199ee0",
                    fillOpacity: 0.2,
                    strokeWeight: 2,
                    strokeColor: "#113460",
                    clickable: true,
                    editable: true,
                    geodesic: false,
                    visible: true,
                    zIndex: 1,
                    // paths: coords
                }
            }}
        /> : null}


        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={140}
        >

            {props.markerList && props.markerList.map((marker, i) => {
                return <Marker
                    onClick={props.onMarkerClick}
                    icon={homeIcon}
                    key={i}
                    label={marker.name}
                    position={{
                        lat: parseFloat(marker.lat),
                        lng: parseFloat(marker.lon)
                    }}



                />
            })

            }


        </MarkerClusterer>

    </GoogleMap>
));






class BasicMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mapDrawing: false,
            removePolygon: true,
            selectedAraaPath: null,
            filterMarkerList: null
        }
    }


    filterMarkWithArea(markerlist, areaPath) {
        // var area = new google.maps.Polygon({paths: areaPath});
        // var resultPath = google.maps.geometry.poly.containsLocation(e.latLng, area) ?


        // let res = google.maps.geometry.poly.containsLocation({
        //     lat: 18.521609,
        //     lng: 73.854105
        // },
        //     [{
        //         latitude: 18.5717348033758,
        //         longitude: 73.7665576977539
        //     },
        //     {
        //         latitude: 18.57238569101874,
        //         longitude: 73.78441048095702
        //     },
        //     {
        //         latitude: 18.57596552864362,
        //         longitude: 73.95847511718749
        //     },
        //     {
        //         latitude: 18.470817229062195,
        //         longitude: 73.92997932861327
        //     },
        //     {
        //         latitude: 18.471468500891003,
        //         longitude: 73.74218178222655
        //     }]
        // )

        // console.log("your point is ", res);

    }

    onMarkerClick = (e) => {
        console.log("marker click", e);
    }



    removePolygon = () => {
        this.setState({ removePolygon: !this.state.removePolygon })
    }

    onMarkerClustererClick = (e) => {
        console.log("clst", e)
    }

    onDrawCompleted = (poly) => {
        console.log("oncomp Draw", poly)

        const polyArray = poly.getPath().getArray();
        let paths = [];
        polyArray.forEach(function (path) {
            paths.push({ latitude: path.lat(), longitude: path.lng() });
        });
        console.log("onPolygonComplete", paths);

        this.setState({ selectedAraaPath: paths });


    }



    mapDrawingHandler = () => {
        this.setState({ mapDrawing: !this.state.mapDrawing });
    }


    render() {

        const markerList = [{
            label: "1",
            position: {
                lat: 18.517458,
                lng: 73.858138
            },
            name: "Budhvar peth"
        },
        {
            label: "3",
            position: {
                lat: 18.524172,
                lng: 73.859704
            },
            name: "Mangalwar peth"
        }, {
            label: "4",
            name: "pune",
            position: {
                lat: 18.521609,
                lng: 73.854105
            }
        },
        {
            label: "5",
            name: "Pune shanivar",
            position: {
                lat: 18.519259,
                lng: 73.855363
            }
        },
        {
            label: "6",
            position: {
                lat: 18.521751,
                lng: 73.858416
            },
            name: "Kasaba peth"
        }

        ];
        return (
            <div>
                <button onClick={() => this.filterMarkWithArea()}> check</button>
                <button onClick={() => this.mapDrawingHandler()}> mapDraw</button>
                <button onClick={() => this.removePolygon()}> rem Polygon</button>
                <div>

                </div>

                <hr />
                <DrawingManagerWrapper
                    mapDrawing={this.state.mapDrawing}
                    removePolygon={this.state.removePolygon}
                    onDrawCompleted={(res) => this.onDrawCompleted(res)}
                    onMarkerClick={(res) => this.onMarkerClick(res)}
                    onMarkerClustererClick={(e) => this.onMarkerClustererClick(e)}

                    markerList={cityData}
                />
            </div>
        )
    }
}
export default BasicMap;