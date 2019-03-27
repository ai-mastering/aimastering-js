# Aimastering.Subscription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**userId** | **Number** |  | [optional] 
**stripeSubscriptionId** | **String** |  | [optional] 
**currentPeriodStartAt** | **Date** |  | [optional] 
**currentPeriodEndAt** | **Date** |  | [optional] 
**canceled** | **Boolean** |  | [optional] 
**cancelAtPeriodEnd** | **Boolean** |  | [optional] 
**trialEnd** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `trialing` (value: `"trialing"`)

* `active` (value: `"active"`)

* `past_due` (value: `"past_due"`)

* `unpaid` (value: `"unpaid"`)

* `canceled` (value: `"canceled"`)




