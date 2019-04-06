# Aimastering.Mastering

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**userId** | **Number** |  | [optional] 
**inputAudioId** | **Number** |  | [optional] 
**outputAudioId** | **Number** |  | [optional] 
**outputVideoId** | **Number** |  | [optional] 
**referenceAudioId** | **Number** |  | [optional] 
**mode** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**failureReason** | **String** |  | [optional] 
**targetLoudnessMode** | **String** |  | [optional] 
**targetLoudness** | **Number** |  | [optional] 
**outputFormat** | **String** |  | [optional] 
**preset** | **String** |  | [optional] 
**bitDepth** | **Number** |  | [optional] 
**sampleRate** | **Number** |  | [optional] 
**reviewComment** | **String** |  | [optional] 
**reviewScore** | **Number** |  | [optional] 
**masteringMatchingLevel** | **Number** |  | [optional] 
**progression** | **Number** |  | [optional] 
**bassPreservation** | **Boolean** |  | [optional] 
**mastering** | **Boolean** |  | [optional] 
**masteringAlgorithm** | **String** |  | [optional] 
**preserved** | **Boolean** |  | [optional] 
**retryCount** | **Number** |  | [optional] 
**masteringReverb** | **Boolean** |  | [optional] 
**masteringReverbGain** | **Number** |  | [optional] 
**lowCutFreq** | **Number** |  | [optional] 
**highCutFreq** | **Number** |  | [optional] 
**ceiling** | **Number** |  | [optional] 
**ceilingMode** | **String** |  | [optional] 
**oversample** | **Number** |  | [optional] 
**limitingError** | **Number** |  | [optional] 
**videoTitle** | **String** |  | [optional] 
**videoStatus** | **String** |  | [optional] 
**expireAt** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `default` (value: `"default"`)

* `custom` (value: `"custom"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `waiting` (value: `"waiting"`)

* `processing` (value: `"processing"`)

* `canceled` (value: `"canceled"`)

* `failed` (value: `"failed"`)

* `succeeded` (value: `"succeeded"`)




<a name="FailureReasonEnum"></a>
## Enum: FailureReasonEnum


* `unknown` (value: `"unknown"`)

* `expired` (value: `"expired"`)

* `failed_to_prepare` (value: `"failed_to_prepare"`)




<a name="TargetLoudnessModeEnum"></a>
## Enum: TargetLoudnessModeEnum


* `loudness` (value: `"loudness"`)

* `rms` (value: `"rms"`)

* `peak` (value: `"peak"`)

* `youtube_loudness` (value: `"youtube_loudness"`)




<a name="OutputFormatEnum"></a>
## Enum: OutputFormatEnum


* `wav` (value: `"wav"`)

* `mp3` (value: `"mp3"`)




<a name="PresetEnum"></a>
## Enum: PresetEnum


* `general` (value: `"general"`)

* `pop` (value: `"pop"`)

* `jazz` (value: `"jazz"`)

* `classical` (value: `"classical"`)




<a name="MasteringAlgorithmEnum"></a>
## Enum: MasteringAlgorithmEnum


* `v1` (value: `"v1"`)

* `v2` (value: `"v2"`)




<a name="VideoStatusEnum"></a>
## Enum: VideoStatusEnum


* `waiting` (value: `"waiting"`)

* `failed` (value: `"failed"`)

* `succeeded` (value: `"succeeded"`)




