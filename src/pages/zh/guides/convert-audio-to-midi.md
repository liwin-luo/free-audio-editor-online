---
title: 音频转 MIDI - 单乐器，最长 3 分钟
description: 哼一段旋律、一句人声或一首独奏钢琴，在浏览器里转成 MIDI 文件。哪些素材转得准、哪些转不准，以及 .mid 文件里有什么。文件不会上传。
tool: audio-to-midi
locale: zh
date: 2026-10-21
layout: ../../../layouts/Guide.astro
sources:
  - label: Basic Pitch — Spotify 开源的音频转 MIDI 工具
    url: https://basicpitch.spotify.com/
  - label: Bittner et al., A Lightweight Instrument-Agnostic Model for Polyphonic Note Transcription and Multipitch Estimation (ICASSP 2022)
    url: https://arxiv.org/abs/2203.09893
---

音频转 MIDI 是把录音变回音符：每个音的音高、起点、时值和力度。拿到 DAW
里，就能改掉弹错的音、换一件乐器、对齐节拍，不用重录一遍。

[音频转 MIDI](/zh/audio-to-midi) 页面在浏览器里完成这件事。它在你的设备上
运行 Spotify 的 Basic Pitch 模型，输出 .mid 文件，音频不会上传。

## 什么转得准，什么转不准

Basic Pitch 一次只认一件乐器：单旋律、一段人声、一首独奏钢琴。给它这些，
出来的音符就是你奏的那些。

整首混音是另一回事。模型在一条单声道里听所有乐器（立体声会先混成单声
道），编曲越密，出来的音符越多余或越缺。鼓没有音高可读，通常什么都出不
来。这里没有分轨：一个文件进，一轨音符出。

如果你要的其实只是调性和 BPM，不用转 MIDI。
[调性与 BPM](/zh/key-bpm-finder) 直接读出这两个数，不写文件。

## 转换步骤

1. 打开[音频转 MIDI](/zh/audio-to-midi)。
2. 放一件乐器的文件：MP3、WAV、M4A，或带音轨的视频。超过 3 分钟会被拒收，
   先去[音频剪辑](/zh/audio-trimmer)裁短，再回来转。
3. 第一次转换会从本站下载模型，不到 1 MB。浏览器会留着副本，等待只有一次。
4. 下载前先看音符数。哼的旋律应该接近你哼的音数；短短一段数出几百个音符，
   说明录音里不止一件乐器，文件也会乱。
5. 点下载，.mid 文件存进设备。

页面没有试听，音符以文字列表展示，第一次听到它们是在 DAW 里。Chrome、
Edge、Firefox、Safari 都能用；内存紧张的手机可能转换失败，换短一点的
片段通常能过。

## .mid 文件里有什么

单轨，MIDI type 0。每个音符带音高（21 到 108，对应钢琴的 A0 到 C8）、起
点、时值和力度。速度标记是 120 BPM，这让音符时间和录音的秒数对得上；它
不是这首歌的速度。

音轨从 General MIDI 钢琴音色开始，DAW 导入后有声音可放。它不是你原乐器
的录音，导入后把音色换掉。

文件里没有的两样：弯音（人声滑音会变成停在尾音上的直音）和乐谱。本站不
出谱面。

## 下载之后

把 .mid 拖进 GarageBand、Logic、Ableton 或任何读 MIDI 的 DAW。常规后续：
换掉钢琴音色，改掉模型听错的那一两个音，节拍飘了就量化。

录音本身没问题、只是整体调不对？不改音符、直接改原音频音高的是
[变调](/zh/pitch-changer)。

Logic 自带音频转 MIDI 命令，那个跑在工程里；本页是浏览器版本，给 Logic
没开的时候用，转出的 .mid 之后照样拖得进 Logic 工程。

## 常见错误

**拿整首歌转，指望分出伴奏和人声。** 输出是整个混音弹出来的一轨音符，
分轨是另一类工具。

**只凭耳朵判断。** 页面上的音符数是最快的质量检查，数字离谱，文件也离谱。

**对着音箱翻录一遍再转。** 房间和音箱都会被当成素材转出来。要转的是音频
文件本身，不是它的翻录。

**指望文件里带歌的速度。** 120 BPM 这个标记只是让音符时间对上录音秒数，
DAW 的节拍器不会跟着歌走，真实速度先用[调性与 BPM](/zh/key-bpm-finder)读。
