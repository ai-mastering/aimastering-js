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
**retryCount** | **Number** |  | [optional] 
**masteringReverb** | **Boolean** |  | [optional] 
**masteringReverbGain** | **Number** |  | [optional] 
**lowCutFreq** | **Number** |  | [optional] 
**highCutFreq** | **Number** |  | [optional] 
**expireAt** | **Date** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `default` (value: `"default"`)

* `custom` (value: `"custom"`)

* `preset` (value: `"preset"`)




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

* `job_queue` (value: `"job_queue"`)




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




