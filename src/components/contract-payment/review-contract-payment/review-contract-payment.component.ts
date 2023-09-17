import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'review-contract-payment',
		templateUrl: './review-contract-payment.component.html',
		styleUrls: ['./review-contract-payment.component.css']
	}
)

export class ReviewContractPaymentComponent implements OnInit
	{
		contractPaymentId: string = "";
		contractPayment: any;
		isLoading: boolean = false;

		constructor
		(
			private route: ActivatedRoute,
			private contractPaymentService : ContractPaymentService
		){}

		ngOnInit
		(): void
			{
				if
				(
					this.route.parent
				)
					{
						this.route.parent.params.subscribe(params => 
							{
								this.contractPaymentId = params['contractPaymentId']; 
								console.log(this.contractPaymentId);
								
								this.getContractPayment();
							}
						);
					}
			}

		async getContractPayment
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;

						const data = await this.contractPaymentService
							.get(
								this.contractPaymentId
							);
						console.log(data.contractPayment);
						this.contractPayment = data.contractPayment;

						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						if
						(
							error.error &&
							error.error.message
						)
							{
								alert(error.error.message);
							}
						else
							{
								alert(error)
							}
					}
				
			}

		async setAsSettled
		():Promise<void>
			{
				try
							{
		
								this.isLoading = true;
		
								const data = await this.contractPaymentService.setIsSettled(
									this.contractPaymentId,
									true,
								);
		
								console.log(data.result);
							
								this.isLoading = false;

								// navigate to list?
							}
						catch
						(
							error:any
						)
							{
								this.isLoading = false;
								
								if
								(
									error.error &&
									error.error.message
								)
									{
										alert(error.error.message);
									}
								else
									{
										alert(error)
									}
							}
				
			}

		async setAsNotSettled
		():Promise<void>
			{
				try
					{

						this.isLoading = true;

						const data = await this.contractPaymentService.setIsSettled(
							this.contractPaymentId,
							false,
						);

						console.log(data.result);
					
						this.isLoading = false;

						// navigate to list?
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						
						if
						(
							error.error &&
							error.error.message
						)
							{
								alert(error.error.message);
							}
						else
							{
								alert(error)
							}
					}
				
			}
	}
